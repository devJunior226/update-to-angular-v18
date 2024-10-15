import { Injectable } from '@angular/core';
import { Pokemon, PokemonList } from '../models/pokemon.model';
import { POKEMON_LIST } from '../models/pokemon-list.fake';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  /** Retourner la liste de tous les pokémons */
  getPokemons(): PokemonList {
    return POKEMON_LIST;
  }

  /** Retrouver un pokemon en fonction de son identifiant */
  getPokemonById(pokemonId: number): Pokemon {
    const pokemon = POKEMON_LIST.find((pokemon) => pokemon.id === pokemonId);
    if (!pokemon) {
      throw new Error(`No pokemon found with id ${pokemonId}`);
    }
    return pokemon;
  }

  /** Retourne la liste des types de pokemon */
  getPokemonByType(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
    ];
  }
}
