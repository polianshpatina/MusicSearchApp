import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Components/search/search.component';
import { ArtistsComponent } from './Components/artists/artists.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { TracksComponent } from './Components/tracks/tracks.component';

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
