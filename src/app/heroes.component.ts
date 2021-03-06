import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl:'./heroes.component.html',
})

export class HeroesComponent implements OnInit  {
  constructor(private heroService:HeroService){}

  ngOnInit():void{
    this.getHeroes();
  }

  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
  getHeroes():void{
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
    // this.heroService.getHeroesSlowly().then(heroes=>this.heroes=heroes);
  }

}
