import { NoteComponent } from './note.component';
import { ApiService, Note } from '../../services/api.service';
import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { By }             from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';


let comp: NoteComponent;
let fixture: ComponentFixture<NoteComponent>;
let noteEl: DebugElement;
let noteService: DebugElement;
let spy: jasmine.Spy;
let testNote: Note = new Note(1, "nota1");

describe('NoteComponent', () => {
      beforeEach(() => {

            TestBed.configureTestingModule({
                  declarations: [NoteComponent],
                  providers: [
                        ApiService,
                        BaseRequestOptions,
                        MockBackend,
                        {
                              provide: Http,
                              useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                                    return new Http(backend, defaultOptions);
                              },
                              deps: [MockBackend, BaseRequestOptions],
                        },
                  ],
            });

            fixture = TestBed.createComponent(NoteComponent);
            comp = fixture.componentInstance;

            // ApiService injectado dentro del componente note
            noteService = fixture.debugElement.injector.get(ApiService);

            // espíamos el método getNote del servicio
            spy = spyOn(noteService, 'getNote').and.returnValue(Promise.resolve(testNote));

            noteEl = fixture.debugElement.query(By.css('.note'));
      });

      function getNote() { 
            return noteEl.nativeElement.textContent; 
      }

      it('no debe mostrar la nota antes de OnInit', () => {
            expect(getNote()).toBe('');
            expect(spy.calls.any()).toBe(false);
      });

      it('todavía no deben mostrar nota después componente inicializado', () => {
            fixture.detectChanges(); // data binding
            expect(getNote()).toBe('...', 'no hay nota todavía');
            expect(spy.calls.any()).toBe(true, 'getNote llamado');
      });

       it('debe mostrar nota después de la promesa getNote ( asíncrono )', async(() => {
            fixture.detectChanges();          // data binding
            fixture.whenStable().then(() => { // espera para sync con getQuote
                  fixture.detectChanges();        // actualiza la vista con la nota
                  expect(getNote()).toBe(testNote.text);
            });
      }));

      it('debe mostrar nota después de la promesa getNote ( fakeAsync )', fakeAsync(() => {
            fixture.detectChanges(); // data binding
            tick();                  //simula el paso del tiempo hasta que todas las actividades asincrónicas pendientes completas
            fixture.detectChanges(); // data binding
            expect(getNote()).toBe(testNote.text);
      }));

      it('debe mostrar el resultado después de que se ejecute la promesa con getQuote (done)', done => {
            fixture.detectChanges();   // data binding
            // obtenemos la promesa con spy y esperamos que se resuelva
            spy.calls.mostRecent().returnValue.then(() => {
                  fixture.detectChanges(); // actualiza la vista con la nota
                  expect(getNote()).toBe(testNote.text);
                  done();
            });
      });
})