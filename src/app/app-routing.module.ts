import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailPokemonComponent } from './features/detail-pokemon/detail-pokemon.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'pokemon/:name', component: DetailPokemonComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
