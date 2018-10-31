import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Artist } from '../app.types';
import { SpotifyService } from '../core/services/spotify.service' 


@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {
  
  
  @Input() artist: Artist;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('NC TEST CHAnge')
  }

  searchArtists(artist): void {
    /*this.spotifyService.searchArtists(artist)
    .subscribe((data: object) => {
      console.log(JSON.stringify(data))
    });*/
  }
}
