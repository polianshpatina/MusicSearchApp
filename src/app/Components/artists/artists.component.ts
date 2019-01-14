import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { ActivatedRoute } from "@angular/router";
import { Artist } from "../../models/Artist";

@Component({
  selector: "app-artist",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.scss"]
})
export class ArtistsComponent implements OnInit {
  id: string;
  artist: Artist[];

  constructor(
    private _dataService: DataService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params
      .map(params => params["id"])
      .subscribe(id => {
        this._dataService.getAuth().subscribe(res => {
          this._dataService
            .getArtist(id, res.access_token)
            .subscribe(artist => {
              console.log(artist);
              this.artist = artist;
            });
        });
      });
  }
}
