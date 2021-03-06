import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import '../rxjs/index';

export class User{
    constructor(id: number, name: string){ }
}

@Injectable()
export class ApiService
{
    private usersUrl = 'app/users.json';

    constructor(private http: Http){}


    getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl)
        .map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response)
    {
        let body = res.json();
        return body.data || { };
    }

    private handleError(error: any)
    {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}