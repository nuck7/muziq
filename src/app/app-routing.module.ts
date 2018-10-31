import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { ArtistSearchComponent } from './artist-search/artist-search.component';

const routes: Routes = [
  {
    path: 'authorize', 
    canActivate: [AuthGuard],
    component: ArtistSearchComponent
  },
  {
    path: 'search',
    component: ArtistSearchComponent
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
