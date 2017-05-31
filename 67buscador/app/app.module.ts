import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent }   from './components/home/home.component';
import { PostService } from './services/post.service';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ HomeComponent, SearchPipe ],
    bootstrap:    [ HomeComponent ],
    providers:    [ PostService]
})
export class AppModule { }