import { Component } from '@angular/core';

@Component({
    selector: 'panel',
    template: `
    <div class="card-panel">
        <span class="black-text">
            UserId: {{ user.id }}, username: {{ user.username }}
        </span>
    </div>
    `    
})
export class PanelComponent
{
    user: Object = { 
        id: 1,
        username: 'iparra'
    }
}