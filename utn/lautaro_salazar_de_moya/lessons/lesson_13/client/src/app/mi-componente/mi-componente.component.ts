import { Component, OnInit } from '@angular/core';
import { getPokemons, Pokemon } from 'src/services/api';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  
  public pokemon:Pokemon[];

  constructor() { 

      this.pokemon = [];

      getPokemons()
      .then((pokemonArray:Array<Pokemon> )=>{
        this.pokemon = pokemonArray;

        console.log(this.pokemon);
      })
      .catch(error=>console.log(error))

  }

  ngOnInit(): void {


  }

}
