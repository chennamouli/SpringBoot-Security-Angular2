import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../service/hero.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'hero-component',
    templateUrl: '../html/hero.component.html',
    providers: [HeroService]
})
export class HeroComponent implements OnInit {
    constructor(private heroService: HeroService,
        private modalService: NgbModal,
        private router: Router) { }

    closeResult: string;
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

    viewHero(hero: Hero): void {
        console.log('Selected Hero: ' + hero.name)
        this.selectedHero = hero;
        this.router.navigate(['/view/', hero.id]);
    }
    deleteHero(content: any, hero: Hero): void {
        console.log('Deleting Hero: ' + hero.name);
        console.log('Deletign content: ' + content);
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }




}