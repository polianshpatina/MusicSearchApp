import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './Components/search/search.component';
import { ArtistsComponent } from './Components/artists/artists.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { TracksComponent } from './Components/tracks/tracks.component';


const routes: Routes = [
  //{path: 'search', component: SearchComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'tracks', component: TracksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
