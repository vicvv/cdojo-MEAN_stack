import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPokemon(){
    return this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  }

  pokemonAbilities(){
    return this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  }

  pokemonOvergrow(){
    return this._http.get("https://pokeapi.co/api/v2/ability/65/");
  }

  pokemonChlorophyll(){
    return this._http.get("https://pokeapi.co/api/v2/ability/34/");
  }
}
