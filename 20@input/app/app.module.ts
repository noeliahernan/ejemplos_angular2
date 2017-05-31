import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { PanelComponent } from './components/panel/panel.component';


@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HomeComponent, PanelComponent ],
    bootstrap: [ HomeComponent ]
})

export class AppModule{

}