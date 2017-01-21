import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../service/hero.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'hero-component',
    templateUrl: '../html/hero.component.html',
    providers: [HeroService]
})
export class HeroComponent implements OnInit {
    constructor(private heroService: HeroService, private router: Router) { }

    heroes: Hero[];
    selectedHero: Hero;
    ngOnInit(): void {
        console.log('Inside HeroComponent ngOnInit...');
        this.heroService
            .getHeroes()
            .then(heroes => {
                console.log('inside HeroComponent then...' + heroes);
                this.heroes = heroes
            });
        console.log('Heroes: ' + this.heroes);
    }

    onSelect(hero: Hero): void {
        console.log('Selected Hero: ' + hero.name)
        this.selectedHero = hero;
        this.router.navigate(['/view/', hero.id]);
    }


}