import {Component, inject, signal} from '@angular/core';
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-pokemon-profile',
  standalone: true,
  imports: [
    DatePipe, RouterLink, NgIf
  ],
  templateUrl: './pokemon-profile.component.html',
  styles: ``
})
export class PokemonProfileComponent {
  readonly activatedRoute = inject(ActivatedRoute);
  readonly pokemonService = inject(PokemonService);
  //readonly pokemonId = Number(this.activatedRoute.snapshot.params['id']);
  readonly pokemonId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  readonly currentPokemon = signal(this.pokemonService.getPokemonById(this.pokemonId)).asReadonly();
}
