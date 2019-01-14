import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  searchStr: string;
  results: Object[];
  query: FormControl = new FormControl();

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.query.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(query =>
        this._dataService.getAuth().subscribe(res =>
          this._dataService
            .searchMusic(query, "track", res.access_token)
            .subscribe(res => {
              console.log(res.tracks.items);
              this.results = res.tracks.items;
            })
        )
      );
  }

  // search() {
  //   this.query.valueChanges
  //     .debounceTime(400)
  //     .distinctUntilChanged()
  //     .subscribe(query =>
  //       this._dataService.getAuth().subscribe(res =>
  //         this._dataService
  //           .searchMusic(query, "track", res.access_token)
  //           .subscribe(res => {
  //             console.log(res.tracks.items);
  //             this.results = res.tracks.items;
  //           })
  //       )
  //     );
  // }
}
