import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DataService } from "../app/Services/data.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./Components/search/search.component";
import { ArtistsComponent } from "./Components/artists/artists.component";
import { AlbumsComponent } from "./Components/albums/albums.component";
import { TracksComponent } from "./Components/tracks/tracks.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistsComponent,
    AlbumsComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
