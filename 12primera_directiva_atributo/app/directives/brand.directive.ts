import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[Brand]'
})

export class BrandDirective
{
    constructor(el: ElementRef, renderer: Renderer)
    {
        renderer.setElementStyle(el.nativeElement, 'color', '#EF997D');
        renderer.setElementStyle(el.nativeElement, 'textDecoration', 'underline');
    }
}