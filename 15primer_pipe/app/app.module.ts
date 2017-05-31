import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { JoinPipe } from './pipes/join/join.pipe';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HomeComponent, JoinPipe ],
    bootstrap: [ HomeComponent ]
})

export class AppModule{

}