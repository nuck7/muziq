import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SpotifyService } from '../core/services/spotify.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistSearchResult = {};
  artistInput:string;
  //@Output() artistSearchResult = new EventEmitter<Artist>();

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(){

   }

   searchArtist() {
     
    console.log('artist input: ' + this.artistInput);
    this.spotifyService.searchArtists(this.artistInput)
    .subscribe((data: object) => {
      this.artistSearchResult = {
        name: data.artists.items[0].name,
        genres: data.artists.items[0].genres,
        popularity: data.artists.items[0].popularity
        image: data.artists.items[0].images[0].url
      }
      console.log(JSON.stringify(data))
    });
  }
  

  logInWithSpotify() {
    document.location.href = 'https://accounts.spotify.com/authorize?client_id=351f0b79c09a46a4928c2aea62b8e265&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fauthorize'
  }
}
export class AutocompleteSimpleExample {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
