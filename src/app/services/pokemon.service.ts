import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import Pokemon from '../models/pokemon.model';
import Page from '../models/page.model';
import DetailPokemon from '../models/detailPokemon.model';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // private apiUrl="http://15.229.5.174/api/v1/pokemon";
  private apiUrl = "http://localhost:8080/api/v1/pokemon";


  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Page<Pokemon>> {
    return this.http.get<Page<Pokemon>>(this.apiUrl).pipe(
      retry(1),
      map((response: any) => {
        // Mapear la respuesta a un objeto del tipo Page<Pokemon>
        return {
          count: response.count,
          next: response.next,
          previous: response.previous,
          results: response.results.map((pokemon: any) => ({
            name: pokemon.name,
            url: pokemon.url,
            weight: pokemon.weight,
            types: pokemon.types,
            abilities: pokemon.abilities
          }))
        } as Page<Pokemon>;
      }),
      catchError(this.handleError)
    );
  }


  getDetailsPokemon(name: string): Observable<DetailPokemon> {
    return this.http.get<DetailPokemon>(`${this.apiUrl}/${name}`).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
