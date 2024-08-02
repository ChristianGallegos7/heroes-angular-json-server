import { Component, OnInit } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.css'
})
export class ListPageComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) {

  }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }


}
