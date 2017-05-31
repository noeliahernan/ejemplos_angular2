import { ComponentFixture, TestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { HeroComponent } from './hero.component';
import { HeroService, Hero } from '../../services/hero.service';
import { Router } from '@angular/router';

class RouterStub {
    navigateByUrl(url: string) { return url; }
}

let comp: HeroComponent;
let fixture: ComponentFixture<HeroComponent>;
let spy: jasmine.Spy;

describe('HeroComponent Testing', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            providers: [
                { provide: HeroService, useClass: HeroService },
                { provide: Router, useClass: RouterStub }
            ]
        })
        .compileComponents().then(() => {
            fixture = TestBed.createComponent(HeroComponent);
            comp = fixture.componentInstance;
        });
    }));

    beforeEach(() => {
        fixture.detectChanges();
    })

    it('comprobamos el tamaño de la lista', () => {
        const element = fixture.nativeElement;
        comp.heroes = [
            new Hero(1, "Hero1"),
            new Hero(2, "Hero2"),
        ];
        fixture.detectChanges();
        expect(element.querySelectorAll('li').length).toBe(2);
    });

    it('comprobamos el texto del primer elemento de lista', () => {
        const element = fixture.nativeElement;
        comp.heroes = [
            new Hero(1, "Hero1"),
            new Hero(2, "Hero2"),
        ];
        fixture.detectChanges();
        expect(element.querySelector('li:first-child').innerText).toBe("Hero1");
    });

    it('simulamos la navegación al detalle de un héroe', inject([Router], (router: Router) => 
    {
        //atacamos el método navigateByUrl del router
        const spy = spyOn(router, 'navigateByUrl');

        const element = fixture.nativeElement;

        //creamos héroes para nuestro componente
        comp.heroes = [
            new Hero(1, "Hero1"),
            new Hero(2, "Hero2"),
        ];

        fixture.detectChanges();

        element.querySelector('li:first-child').click();

        // argumentos pasados al método router.navigateByUrl()
        const navArgs = spy.calls.first().args[0];

        const id = comp.heroes[0].id;
        expect(navArgs).toBe('/heroes/' + id, 'debe navegar al detalle del primer héroe');
    }));
})