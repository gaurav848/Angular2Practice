import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl : './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit { 
 
  heroes : Hero[]; // this.heroService.getHeroes();
  selectedHero : Hero;
  // hero : Hero = {
  //   id: 1,
  //   name: 'Adhrit'
  // };
  
  constructor(private router : Router,
    private heroService: HeroService ){ }

  ngOnInit() : void {
    this.getHeroes();
  }

  getHeroes(): void {
    //this.heroService.getHeroes().then(heroesRetObj => this.heroes = heroesRetObj );
     this.heroService.getHeroes().then(heroesRetObj => this.heroes = heroesRetObj );
    //this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) : void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
 }
