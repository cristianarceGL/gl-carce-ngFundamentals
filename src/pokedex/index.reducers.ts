import { pokemonReducer } from "@pokedex/features/components/store/reducer/pokemon.reducer";
import { ActionReducerMap } from "@ngrx/store";
import { IPokemonState } from "./features/components/store/pokemon.state";

export interface GlobalState {
  pokemon: IPokemonState;
}

export const reducers: ActionReducerMap<GlobalState> = {
  pokemon: pokemonReducer
};
