import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home-component',
    templateUrl: '../html/home.component.html'
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    componentName:string = 'HomeComponent';
}