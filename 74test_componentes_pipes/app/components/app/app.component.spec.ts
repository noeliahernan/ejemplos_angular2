/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { NoteComponent } from '../note/note.component';
import { TitleCasePipe } from '../../pipes/title-case.pipe';
import { ApiService, Note } from '../../services/api.service';
import { TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { By } from '@angular/platform-browser';


describe('AppComponent Testing', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TitleCasePipe, NoteComponent],
      providers: [
          ApiService,
          BaseRequestOptions,
          MockBackend,
          {
            provide: Http,
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                    return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          },
        ],
    });
  });

  it('comprobar tipo instancia', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true);
  });

  it('debe tener el texto <h1> esperado', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works
    
    h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

    expect(h1.innerText).toMatch(/Hola Mundo/i);
  });

  it('al pulsar se ejecuta el método hello', () => {
      let fixture = TestBed.createComponent(AppComponent);
      let comp = fixture.componentInstance;
      fixture.detectChanges();

      let appEl = fixture.debugElement.query(By.css('.app'));
      appEl.triggerEventHandler('click', null);

      expect(comp.helloWorld).toBe("¡¡HELLO WORLD!!!");
  });
});
