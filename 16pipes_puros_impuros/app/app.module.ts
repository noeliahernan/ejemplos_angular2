import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { PureImpurePipe } from './pipes/pure_impure.pipe';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ HomeComponent, PureImpurePipe ],
    bootstrap: [ HomeComponent ]
})

export class AppModule{

}