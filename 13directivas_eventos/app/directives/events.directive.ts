import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[EventsDirective]'
})

export class EventsDirective
{
    constructor(private el: ElementRef, private renderer: Renderer){}

    @HostListener('mouseenter') onmouseenter()
    {
        this.brandEvent('#EF997D', false);
    }

    @HostListener('mouseleave') onmouseleave()
    {
        this.brandEvent(null, false);
    }

    @HostListener('click') onclick()
    {
        this.brandEvent('#EF997D', true);
    }

    brandEvent(color: string, underline: boolean)
    {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
        if(underline)
        {
            this.renderer.setElementStyle(this.el.nativeElement, 'textDecoration', 'underline');
        }
        else 
        {
            this.renderer.setElementStyle(this.el.nativeElement, 'textDecoration', '');
        }
    }
}