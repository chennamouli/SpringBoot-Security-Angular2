import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../service/hero.service';

@Component({
    moduleId: module.id,
    selector: 'hero-component',
    templateUrl: '../html/hero.component.html',
    providers: [HeroService]
})
export class HeroComponent implements OnInit {
    constructor(private heroService: HeroService) { }

    heroes: Hero[];
    ngOnInit(): void {
        console.log('Inside NavComponent ngOnInit...');
        this.heroService
            .getHeroes()
            .then(heroes => {
                console.log('inside HeroComponent...' + heroes);
                this.heroes = heroes
            });
        console.log('Heroes: ' + this.heroes);
    }


}