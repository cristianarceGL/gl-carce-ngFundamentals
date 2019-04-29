import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PokemonListComponent } from "./features/components/pokemon-list/pokemon-list.component";
import { PokePreloader } from "./app-routing-loader";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'poke-list',
    pathMatch: 'full'
  },
  {
    path: 'poke-list',
    component: PokemonListComponent
  },
  {
    path: 'poke-details/:id',
    loadChildren: './features/components/pokemon-details/pokemon-details.module#PokeDetailsModule',
    data: { preload: true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PokePreloader })], // Define Preloading Strategies
  exports: [RouterModule],
  providers: [PokePreloader]
})
export class AppRoutingModule {}
