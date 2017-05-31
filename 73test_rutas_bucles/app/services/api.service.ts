import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class User{
    constructor(id: number, name: string){ }
}

export class Note {
    constructor(public id: number, public text: string) { }
}

const NOTES: Note[] = [
    new Note(1, 'Nota1'),
    new Note(2, 'Nota2'),
    new Note(3, 'Nota3')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ApiService
{
    constructor (private http: Http) {}
    
    getNotes() {
        return new Promise<Note[]>(resolve => {
            setTimeout(() => { resolve(NOTES); }, FETCH_LATENCY);
        });
    }

    getNote(id: number | string)
    {
        return new Promise<Note>(resolve => {
            setTimeout(() => {
                resolve(NOTES.filter(note => note.id === +id)[0]);
            }, FETCH_LATENCY);
        });
    }

    private usersUrl = 'app/users.json';  // URL to web API

    getUsers ()
    {
        return this.http.get(this.usersUrl).map(this.extractData);
    }

    private extractData(res: Response)
    {
        let body = res.json();
        return body.data || {};
    }

    private handleError (error: any)
    {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}