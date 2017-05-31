import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'home.html',
    styles: [`
        .brand{ color: #EF997D; text-decoration: underline;}
    `]
})
export class HomeComponent
{
    users: Array<string> = ["iparra", "iparra", 'silvia', 'juan', 'andrés', 'manuel'];
    show: boolean = true;
    disabled: boolean = true;
    isBrand: boolean = true;
    bugType: number = 10;
    canSave: boolean = true;
    isUnchanged: boolean = true;
    isSpecial: boolean = false;

    public displayUser(user): void
    {
        console.log(user);
    }

    public setStyles()
    {
        let styles = {
            // CSS property names
            'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
            'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
            'font-size':   this.isSpecial    ? '32px'   : '14px',     // 24px
            'color': this.isBrand            ? '#EF997D': 'black'
        };
        return styles;
    }
}