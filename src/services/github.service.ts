import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class GithubService {

    constructor(private _http: Http) {
  
    }

    getUser(text) {
            return this._http.get('https://api.github.com/search/users?q=' + text)
                .map(res => res.json())
                .catch(this.handleError);
    }

    private handleError(error: any) {

        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }
}
