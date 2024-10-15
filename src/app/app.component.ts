import { Component, computed, signal } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { POKEMON_LIST } from './models/pokemon-list.fake';
import { Pokemon } from './models/pokemon.model';
import { PokemonBorderDirective } from './directives/pokemon-border.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonBorderDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pokemons = signal(POKEMON_LIST);

  size(pokemon: Pokemon) {
    if (pokemon.life <= 15) {
      return 'Petit';
    }
    if (pokemon.life >= 25) {
      return 'Grand';
    } else {
      return 'Moyen';
    }
  }

  incrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life + 1;
  }

  decrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life - 1;
  }
}
