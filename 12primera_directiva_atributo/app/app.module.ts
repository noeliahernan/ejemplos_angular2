import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { BrandDirective } from './directives/brand.directive';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HomeComponent, BrandDirective ],
    bootstrap: [ HomeComponent ]
})

export class AppModule{

}