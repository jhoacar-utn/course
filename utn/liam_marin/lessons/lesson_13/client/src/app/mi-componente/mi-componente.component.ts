import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { getPokemons, Pokemon } from 'src/services/api';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  
  public pokemons:Pokemon[];

  constructor() { 
    this.pokemons = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  async ngOnInit(): Promise<void> {

    this.pokemons = await getPokemons();
    console.log(this.pokemons);
  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

}
