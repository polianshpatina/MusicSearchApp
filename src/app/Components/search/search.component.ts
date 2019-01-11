import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import { Artist } from '../../models/Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [DataService],
})
export class SearchComponent implements OnInit {

  searchString : string;
  
  results: Artist[];

  query = new FormControl();

  constructor(private dataService:DataService) { 
  }

  // search(){
  //   this.dataService.searchMusic(this.searchString,'artist', response.access_token)
  //    .subscribe(response => {
  //      console.log(response.tracks.items);
  //    })
  // }
   
  //  search(){
  //      console.log(this.searchString);
  // }
  
    ngOnInit() {
      this.query.valueChanges.pipe(debounceTime(400))
          .subscribe(query => this.dataService.getAuth()
          .subscribe(res => this.dataService.searchMusic(query, 'artist', res.access_token).subscribe(
            res => {
              console.log(res.artists.items)
              this.results = res.artists.items
            })
          )); 
    }
  

}

