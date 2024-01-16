import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  name:string = "Charmander"
  statsType:string[] = ['Fire', 'Rock']

  constructor(
    private service: PokemonService
  ){}

  ngOnInit(): void {
    this.service.getPokemon("pikachu").subscribe(
      {
        next: (pokeData) => console.log(pokeData),
        error: (err) => console.log(err)
      }
    )
  }

}
