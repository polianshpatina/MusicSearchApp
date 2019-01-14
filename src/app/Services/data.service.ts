import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

@Injectable()
export class DataService {
  private searchUrl: string;
  private artistUrl: string;
  private albumUrl: string;
  private trackUrl: string;

  constructor(private _http: Http) {}

  getAuth() {
    let params = "grant_type=client_credentials";
    let client_id = "2288b07fb3074887928d728bdad042c1"; // Your client id
    let client_secret = "2d0bd10df24a438d87f829f5ba071eeb"; // Your secret
    let encoded = btoa(client_id + ":" + client_secret);
    let headers = new Headers();
    headers.append("Authorization", "Basic " + encoded);
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    let proxy = "https://cors-anywhere.herokuapp.com/";
    let uurl = "https://accounts.spotify.com/api/token";

    return this._http
      .post(proxy + uurl, params, { headers: headers })
      .map(res => {
        let data = res.json();
        return data;
      });
  }

  // Get search results for a query
  searchMusic(query: string, type = "track", authToken: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + authToken);

    this.searchUrl =
      "https://api.spotify.com/v1/search?q=" +
      query +
      "&offset=0&limit=20&type=" +
      type +
      "&market=US";

    return this._http
      .get(this.searchUrl, { headers: headers })
      .map(res => res.json());
  }

  // Get data about artist that has been chosen to view
  getArtist(id: string, authToken: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + authToken);

    this.artistUrl = "https://api.spotify.com/v1/artists/" + id;

    return this._http
      .get(this.artistUrl, { headers: headers })
      .map(res => res.json());
  }

  // Get Ablum selected
  getAlbum(id: string, authToken: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + authToken);

    this.albumUrl = "https://api.spotify.com/v1/albums/" + id;

    return this._http
      .get(this.albumUrl, { headers: headers })
      .map(res => res.json());
  }

  // Get Track's Information
  getTrack(id: string, authToken: string) {
    let headers = new Headers();
    headers.append("Authorization", "Bearer " + authToken);

    this.trackUrl = "https://api.spotify.com/v1/tracks/" + id;

    return this._http
      .get(this.trackUrl, { headers: headers })
      .map(res => res.json());
  }
}
