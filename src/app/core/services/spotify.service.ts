import { Injectable, Output, EventEmitter } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SpotifyService {
    @Output() artistSearchResult: EventEmitter<any> = new EventEmitter();


    constructor(private http: HttpClient) {
        
     }
    searchArtists(artist: string) {
        const spotifyToken = localStorage.getItem('spotifyToken');
        const httpOptions = {
            headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + spotifyToken 
            })
        };
        return this.http.get('https://api.spotify.com/v1/search?q=smallpools&type=artist', httpOptions)
        .pipe(
            tap(artists => console.log('fetched artists')),
        )
    }
    saveSpotifyToken(fragment: string) {
        console.log('Save fragment')
        const firstFragment = fragment.split('=')[1]
        const spotifyToken = firstFragment.split('&')[0]
        console.log('Token: ' + spotifyToken)
        localStorage.setItem('spotifyToken', spotifyToken)
    }
}