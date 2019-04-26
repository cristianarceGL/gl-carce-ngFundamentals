import { Component, OnInit, OnDestroy } from "@angular/core";
import { Pokemon } from "@pokedex/core/models/pokemon.interfaces";
import { Subscription } from "rxjs";
import { IPokemonState } from "@pokedex/features/components/store/pokemon.state";
import { Store } from "@ngrx/store";
import { LoadPokemons } from "@pokedex/features/components/store/actions/pokemon.actions";
import { getPokemonsSelector } from "@pokedex/features/components/store/selectors/pokemon.selectors";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"]
})
export class PokemonListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public pokemons: Pokemon[] = [];

  constructor(private store: Store<IPokemonState>) {}

  ngOnInit() {
    this.store.dispatch(new LoadPokemons());
    this.subscription = new Subscription();
    this.subscription.add(
      this.store.select(getPokemonsSelector).subscribe(pokemons => {
        this.pokemons = pokemons;
        // console.log(pokemons)
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
