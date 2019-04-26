import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPokemonState } from "@pokedex/features/components/store/pokemon.state";
import { GlobalState } from "@pokedex/index.reducers";

export const getPokemonState = createFeatureSelector<GlobalState>(
  "pokeFeature"
);

export const getPokemonsFeature = createSelector(
  getPokemonState,
  state => state.pokemon
);

export const getPokemonsSelector = createSelector(
  getPokemonsFeature,
  pokemonState => pokemonState.pokemons
);

export const getPokemonByIdSelector = id =>
  createSelector(
    getPokemonsSelector,
    pokemonState => pokemonState.find(pokemon => pokemon.id === id)
  );
