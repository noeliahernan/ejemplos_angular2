import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { HttpModule }  from '@angular/http';
import { ApiService } from './services/api.service';

@NgModule({
    imports: [ BrowserModule, HttpModule ],
    declarations: [ HomeComponent ],
    bootstrap: [ HomeComponent ],
    providers: [ ApiService ]
})

export class AppModule{

}