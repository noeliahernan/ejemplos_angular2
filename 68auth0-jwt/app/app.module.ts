import { NgModule }            from '@angular/core';
import { BrowserModule  }      from '@angular/platform-browser';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { Auth }                from './services/auth.service';

import { HomeComponent }        from './components/home/home.component';


@NgModule({
    declarations: [
        HomeComponent
    ],
    providers:    [
        AUTH_PROVIDERS,
        Auth
    ],
    imports:      [
        BrowserModule
    ],
    bootstrap:    [HomeComponent],
})
export class AppModule {}