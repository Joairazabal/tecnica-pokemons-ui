import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import DetailPokemon from 'src/app/models/detailPokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent {

  detailPokemon: DetailPokemon = {
    name: '',
    url: '',
    weight: 0,
    types: [],
    abilities: [],
    moves: [],
    description: ''
  }
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const name = params.get('name');
      if (name) {
        this.pokemonService.getDetailsPokemon(name).subscribe({
          next: (response) => {
            this.detailPokemon = response;
          }
        })
      }
    });
  }
}
