import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { ActivatedRoute } from "@angular/router";
import { Track } from "../../models/Track";
@Component({
  selector: "app-tracks",
  templateUrl: "./tracks.component.html",
  styleUrls: ["./tracks.component.scss"]
})
export class TracksComponent implements OnInit {
  id: string;
  track: Track[];

  constructor(
    private _dataService: DataService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params
      .map(params => params["id"])
      .subscribe(id => {
        this._dataService.getAuth().subscribe(res => {
          this._dataService.getTrack(id, res.access_token).subscribe(track => {
            console.log(track);
            this.track = track;
          });
        });
      });
  }
}
