import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseURL:string = ''
  pokeData:any

  constructor(private http:HttpClient) {
    this.baseURL = environment.pokeApi
  }

  getPokemon(name:string) {
    this.pokeData = this.http.get(`${this.baseURL}${name}`)
    console.log(this.pokeData)
  }
}
