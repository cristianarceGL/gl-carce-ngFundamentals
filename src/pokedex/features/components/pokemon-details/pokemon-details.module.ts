import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeDetailsRoutingModule } from './pokemon-details.routing.module';
import { PokemonDetailsComponent } from './pokemon-details.component';

@NgModule({
  imports: [
    CommonModule,
    PokeDetailsRoutingModule
  ],
  declarations: [PokemonDetailsComponent]
})
export class PokeDetailsModule { }