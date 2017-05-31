import { Component } from '@angular/core';
import { User, ApiService } from '../../services/api.service';

@Component({
    selector: 'my-app',
    template: '{{ users | json }}'
})
export class HomeComponent
{
    users: User[];
    constructor(private apiService: ApiService){}

    ngOnInit()
    {
        this.apiService.getUsers().subscribe(users => {
            this.users = users;
        })
    }
}