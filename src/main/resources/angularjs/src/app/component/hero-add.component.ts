import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../service/hero.service';

@Component({
    moduleId: module.id,
    selector: 'add-hero-component',
    templateUrl: '../html/hero-add.component.html',
    providers: [HeroService]
})
export class HeroAddComponent implements OnInit {
    constructor(private heroService: HeroService) { }

    ngOnInit() { }
    public message: string;
    public messageType: string;
    add(name: string): void {
        name = name.trim();
        if (!name) {
            this.messageType = 'danger';
            this.message = 'Please enter valid hero name';
            return;
        }
        this.heroService.addHero(name)
            .then(resp => {
                this.message = resp['message'] + ' the user "' + name + '"';
                if (resp['status'] == true) {
                    this.messageType = 'success';
                } else {
                    this.messageType = 'danger';
                }
                console.log('Is hero added: ' + JSON.stringify(resp));
            });
    }
}