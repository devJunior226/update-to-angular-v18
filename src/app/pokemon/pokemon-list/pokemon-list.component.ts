import {Component, computed, inject, signal} from '@angular/core';
import {PokemonBorderDirective} from "../../directives/pokemon-border.directive";
import {DatePipe} from "@angular/common";
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../models/pokemon.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [DatePipe, PokemonBorderDirective, RouterLink],
  templateUrl: './pokemon-list.component.html',
  styles: ``
})
export class PokemonListComponent {
  readonly pokemonService = inject(PokemonService);
  readonly pokemonList = signal(this.pokemonService.getPokemons());
  readonly searchTerm = signal('');
  readonly pokemonListFiltered = computed(() => {
    return this.pokemonList().filter((pokemon) =>
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
    }

    return 'Moyen';
  }

  incrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life + 1;
  }

  decrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life - 1;
  }
}
