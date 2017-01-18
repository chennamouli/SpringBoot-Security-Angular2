import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Authorization } from '../interface/authorization';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

    private autUrl: string = '/auth';

    constructor(private http: Http) { }

    getAuthInfo(): Promise<Authorization> {
        const url = `${this.autUrl}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Authorization)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in AuthService: ', error);
        return Promise.reject(error.message || error);
    }
}