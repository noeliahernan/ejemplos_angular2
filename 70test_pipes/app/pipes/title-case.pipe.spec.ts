import { TitleCasePipe } from './title-case.pipe';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('TitleCasePipe', () => {
    let pipe = new TitleCasePipe();

    it('transforma hola mundo en Hola Mundo', () => {
        expect(pipe.transform('hola mundo')).toBe('Hola Mundo');
    })

    it('transforma hola en Hola', () => {
        expect(pipe.transform('hola')).toBe('Hola');
    })
})