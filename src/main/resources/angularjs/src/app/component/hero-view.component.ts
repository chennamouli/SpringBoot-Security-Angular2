import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../service/hero.service';
import { Hero } from '../interface/hero';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'hero-view-component',
    templateUrl: '../html/hero-view.component.html',
    providers: [HeroService]
})
export class HeroViewComponent implements OnInit {
    hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        console.log('Inside hero-view component');
        this.route.params
            .switchMap((params: Params) => this.heroService.viewHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
     goBack(): void {
    this.location.back();
  }
}