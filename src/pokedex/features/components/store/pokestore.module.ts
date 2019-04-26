import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers } from "./../../../index.reducers";
import { effects } from "./../../../index.effects";

@NgModule({
  imports: [
    StoreModule.forFeature("pokeFeature", reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class PokeStoreModule {}
