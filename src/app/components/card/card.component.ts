import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { pokemonData } from 'app/models/pokemonData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  pokemon:pokemonData
  name:string = "Charmander"
  statsType:string[] = ['Fire', 'Rock']

  constructor(
    private service: PokemonService
  ){
    this.pokemon = {
      id:0,
      name:"",
      sprites:{
        front_default: ""
      },
      types:[{
        slot:1,
        type:{name:""}
      }]
    }
  }

  ngOnInit(): void {
    this.service.getPokemon("charizard").subscribe(
      {
        next: (pokeData) => {
          this.pokemon = {
            id: pokeData.id,
            name: pokeData.name,
            sprites: pokeData.sprites,
            types: pokeData.types
          }
        },
        error: (err) => console.log(err)
      }
    )
  }

}
