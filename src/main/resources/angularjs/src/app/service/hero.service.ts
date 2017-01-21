import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Hero } from '../interface/hero';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private uri: string = '/heroes';

    constructor(private http: Http) { }
    getHeroes(): Promise<Hero[]> {
        console.log('Inside getHeroes ...');
        return this.http.get(`${this.uri}/list`)
            .toPromise()
            .then(response => {
                console.log('in getHeroes then: ' + JSON.stringify(response.json(), null, 4));
                return response.json() as Hero[]
            })
            .catch(this.handleError);
    }

    addHero(name: string): Promise<{}> {
        console.log('Inside addHero: ' + name);
        return this.http.get(`${this.uri}/add/${name}`)
            .toPromise()
            .then(response => {
                console.log('in addHero then: ' + JSON.stringify(response.json(), null, 4));
                return response.json()
            })
            .catch(this.handleError);
    }

    viewHero(id: number): Promise<{}> {
        console.log('Inside viewHero: ' + id);
        return this.http.get(`${this.uri}/view/${id}`)
            .toPromise()
            .then(response => {
                console.log('in viewHero then: ' + JSON.stringify(response.json(), null, 4));
                return response.json()
            })
            .catch(this.handleError);
    }

    deleteHero(id: number): Promise<{}> {
        console.log('Inside deleteHero: ' + id);
        return this.http.get(`${this.uri}/delete/${id}`)
            .toPromise()
            .then(response => {
                console.log('in viewHero then: ' + JSON.stringify(response.json(), null, 4));
                return response.json()
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred in HeroService: ', error);
        return Promise.reject(error.message || error);
    }
}