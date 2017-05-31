import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'panel',
    template: `
    <div class="card-panel">
        <span class="black-text" (click)="select()">
            UserId: {{ user.id }}, username: {{ user.username }}
        </span>
    </div>
    `    
})
export class PanelComponent
{
    @Input() user;
    @Output() onSelect = new EventEmitter<boolean>();
    public fired: boolean = false;

    public select()
    {
        this.fired = !this.fired;
        this.onSelect.emit(this.fired);
    }
}