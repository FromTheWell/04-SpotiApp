import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {


  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtista( params['id']);
      this.getTopTracks(params['id']);
    });
  }
  

  getArtista( id: string) {
    
    this.spotify.getArtist( id ).subscribe(artista => {
      console.log( artista );
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks( id: string) {

    this.spotify.getTopTracks( id ).subscribe(topCanciones => {
      console.log( topCanciones );
      this.topTracks = topCanciones;
    });

  }
}
