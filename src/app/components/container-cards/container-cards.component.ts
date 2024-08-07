import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Page from 'src/app/models/page.model';
import Pokemon from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-container-cards',
  templateUrl: './container-cards.component.html',
})
export class ContainerCardsComponent {
  page: Page<Pokemon> = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  };
  errorMessage: string = '';
  loaded: boolean = true;

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe({
      next: (response) => {
        this.page = response;
      },
      error: (error) => {
        this.errorMessage = error;
      },
      complete: () => {
        this.loaded = false;
      }
    });
  }

  viewDetails(name: string): void {
    this.router.navigate(['/pokemon', name]);
  }
}
