import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard-component',
    templateUrl: '../html/dashboard.component.html',
    styleUrls:['../css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    componentName:string = 'DashboardComponent';
}