import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "environments/environment";
import { pokemonData } from "app/models/pokemonData";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseURL:string = ''
  pokeData:pokemonData| any

  constructor(private http:HttpClient) {
    this.baseURL = environment.pokeApi
  }

  getPokemon(name:string):Observable<pokemonData> {
    this.pokeData = this.http.get<pokemonData>(`${this.baseURL}${name}`)
    return this.pokeData
  }
}
