// App tests
import { inject, TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { ApiService, User, Note } from './api.service';

let testNote: Note = new Note(1, "Nota1");

describe('Http', () => {

    let subject: ApiService = null;
    let backend: MockBackend = null;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ApiService, //api service
                BaseRequestOptions, //
                MockBackend, // maqueta para testear el servicio http
                {
                    provide: Http,
                    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions],
                },
            ],
        });

    });

    beforeEach(inject([ApiService, MockBackend], (apiService: ApiService, mockBackend: MockBackend) => {
        subject = apiService;
        backend = mockBackend;
    }));

    it('getUsers debe retornar un usuario juan', done => {
        backend.connections.subscribe((connection: MockConnection) => {
            let options = new ResponseOptions({
                body: {
                    data: {
                        id: 2, name: 'pepito'
                    }
                }
            });
            connection.mockRespond(new Response(options));
        });

        subject.getUsers().subscribe((response) => {
            expect(response).toEqual({ id: 2, name: 'pepito' });
        });
        done();
    });

    it('test note', async(() => {
        subject.getNote(1).then((response) => {
            expect(response).toEqual(testNote);
        })
    }));

})