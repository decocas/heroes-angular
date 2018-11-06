import { Component, OnInit } from '@angular/core';
import {Heroe} from '../heroe';
import {HEROES} from '../heroe-mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

selectedHeroe: Heroe; 


heros= HEROES;
  constructor() { }

  ngOnInit() {
  }

onSelect(heroe: Heroe): void {
    this.selectedHeroe = heroe;
  }
}
