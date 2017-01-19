import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Authorization } from '../interface/authorization';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

    private authUrl: string = '/heroes/auth';

    constructor(private http: Http) { }
    getAuthDetails(): Promise<Authorization> {
        console.log('Inside getAuthDetails ...');
        return this.http.get(this.authUrl)
            .toPromise()
            .then(response => {
                console.log('in auth service then: '+JSON.stringify(response.json(), null, 4));
                return response.json() as Authorization})
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in AuthService: ', error);
        return Promise.reject(error.message || error);
    }
}