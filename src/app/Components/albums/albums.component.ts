import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"]
})
export class AlbumsComponent implements OnInit {
  id: string;
  album: Object[];
  constructor(
    private _dataService: DataService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params
      .map(params => params["id"])
      .subscribe(id => {
        this._dataService.getAuth().subscribe(res => {
          this._dataService.getAlbum(id, res.access_token).subscribe(album => {
            console.log(album);
            this.album = album;
          });
        });
      });
  }
}
