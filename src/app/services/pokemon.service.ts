import { Injectable } from '@angular/core';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseURL:string = ''

  constructor() {
    this.baseURL = environment.pokeApi
  }

  getPokemon(name:string) {
    console.log(this.baseURL)
    console.log(environment)
  }
}
