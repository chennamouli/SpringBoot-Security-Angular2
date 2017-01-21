import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Authorization } from '../interface/authorization';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
    moduleId: module.id,
    selector: 'nav-component',
    templateUrl: '../html/nav.component.html',
    providers: [AuthService]
})
export class NavComponent implements OnInit {
    authorization: Authorization = new Authorization();
    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        console.log('Inside NavComponent ngOnInit...');
        this.authService
            .getAuthDetails()
            .then(auth => {
                console.log('inside auth then...' + auth);
                this.authorization = auth
            });
        console.log('Authorization: ' + this.authorization);
    }
}