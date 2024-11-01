import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, Routes} from "@angular/router";
import {PokemonListComponent} from "./pokemon/pokemon-list/pokemon-list.component";
import {PokemonProfileComponent} from "./pokemon/pokemon-profile/pokemon-profile.component";
import {NotFoundPageComponent} from "./pokemon/not-found-page/not-found-page.component";

const routes: Routes = [
  {path: "pokemons", component: PokemonListComponent, title: 'Pokédex'},
  {path: "pokemons/:id", component: PokemonProfileComponent, title: "Pokémon"},
  {path: "", redirectTo: "/pokemons", pathMatch: "full"},
  {path: "**", component: NotFoundPageComponent, title: "Page non trouvée"}
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes)
  ]
};
