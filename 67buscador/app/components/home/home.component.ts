import {Component} from '@angular/core';
import { PostService, Post } from '../../services/post.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'home.html'
})
export class HomeComponent
{
    posts: Post[];
    postSearch: string = "";
    constructor(private postService: PostService) {}

    ngOnInit()
    {
        setTimeout(() => {
            this.postService.getPosts().then(posts => {
                this.posts = posts;
            });
        }, 2000);
    }
}