import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}
  title = 'Pokemon API';
  pokemon = {};

  ngOnInit(): void {
  //this is only to see the console staff.. do not use it for the clicks

    this.getPokemonInfo();
    this.getOvergrow();
    this.pokemonChlorophyll();

  }

  getPokemonInfo(){
    let observable = this._httpService.getPokemon();
    observable.subscribe((data:any) => {
    this.pokemon = {name: data['name'],abilities: data['abilities']}
    console.log("Got the Pokemon!", data);
    console.log(`${data.name}'s abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}.`);
    //console.log(this.pokemon['name']);
    });
  }

  getOvergrow(){
    let observable = this._httpService.pokemonOvergrow();
    observable.subscribe((data:any) =>{
    console.log(`${data.pokemon.length} Pokemons have the ${data.name} ability!`);
    });
  }

  pokemonChlorophyll(){
    let observable = this._httpService.pokemonChlorophyll();
    observable.subscribe((data:any) =>{
      console.log(`${data.pokemon.length} Pokemon have the ${data.name} ability!`);
    });
  }
}


