import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonItemComponent } from "./pokemon-item.component";

describe("PokemonDetailComponent", () => {
  let component: PokemonItemComponent;
  let fixture: ComponentFixture<PokemonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
