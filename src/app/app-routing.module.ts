import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./Components/search/search.component";
import { ArtistsComponent } from "./Components/artists/artists.component";
import { AlbumsComponent } from "./Components/albums/albums.component";
import { TracksComponent } from "./Components/tracks/tracks.component";

const routes: Routes = [
  { path: "", component: SearchComponent },
  { path: "artists/:id", component: ArtistsComponent },
  { path: "albums/:id", component: AlbumsComponent },
  { path: "tracks/:id", component: TracksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
