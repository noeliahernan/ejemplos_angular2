import { HelloComponent } from './hello.component';
import { TestBed } from '@angular/core/testing';
import { By }             from '@angular/platform-browser';

describe('HelloComponent Test', function () {
      beforeEach(() => {
            TestBed.configureTestingModule({
                  declarations: [HelloComponent]
            })
      })

      it('comprobar el tipo de instancia', () => {
            let fixture = TestBed.createComponent(HelloComponent);
            expect(fixture.componentInstance instanceof HelloComponent).toBe(true);
      })

      it('debe tener el texto <h1> esperado', () => {
            let fixture = TestBed.createComponent(HelloComponent);
            fixture.detectChanges();
            let h1 = fixture.debugElement.query(By.css('h1')).nativeElement;

            expect(h1.innerText).toMatch(/hola mundo/i);
      })

      it('al pulsar el párrafo se ejecuta el método hello', () => {
            let fixture = TestBed.createComponent(HelloComponent);
            let comp = fixture.componentInstance;
            fixture.detectChanges();

            let helloEl = fixture.debugElement.query(By.css(".hello"));

            helloEl.triggerEventHandler('click', null);

            expect(comp.helloWorld).toBe("¡¡HELLO WORLD!!!");
      })

})