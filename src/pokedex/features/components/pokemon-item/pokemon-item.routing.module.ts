
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonItemComponent } from './pokemon-item.component';

const routes: Routes = [
  { path: '', component: PokemonItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeItemRoutingModule { }