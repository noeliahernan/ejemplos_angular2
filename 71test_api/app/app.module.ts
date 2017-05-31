import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './components/app/app.component';
import { NoteComponent }  from './components/note/note.component';
import { HelloComponent }  from './components/hello/hello.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { ApiService } from './services/api.service';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, TitleCasePipe, NoteComponent, HelloComponent ],
  bootstrap: [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
