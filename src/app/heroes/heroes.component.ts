import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    selectedHero: Hero;

    heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
        this.log('log heroes.component.ts funktioniert');
        this.logService('log hero.service.ts funktioniert');
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;

    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    log(text: string) {
        console.log(text);
    }

    logService(text: string) {
        console.log(this.heroService.log(text));
    }
}
