import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeItemRoutingModule } from './pokemon-item.routing.module';
import { PokemonItemComponent } from './pokemon-item.component';

@NgModule({
  imports: [
    CommonModule,
    PokeItemRoutingModule
  ],
  declarations: [PokemonItemComponent]
})
export class PokeItemModule { }