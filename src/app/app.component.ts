import { Component, computed, inject, signal } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { PokemonBorderDirective } from './directives/pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonBorderDirective, DatePipe, ReversePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private readonly pokemonService = inject(PokemonService);
  pokemons = signal(this.pokemonService.getPokemons());
  readonly searchTerm = signal('');

  /** Recherche */
  readonly pokemonListFiltered = computed(() => {
    return this.pokemons().filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(this.searchTerm().trim().toLowerCase())
    );
  });

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
