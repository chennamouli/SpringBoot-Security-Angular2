import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
    moduleId: module.id,
    selector: 'home-component',
    templateUrl: '../html/home.component.html',
    providers: [AuthService]
})
export class HomeComponent implements OnInit {
    constructor(private authService: AuthService) { }

    ngOnInit() { console.log('Inside HomeComponent') }
}