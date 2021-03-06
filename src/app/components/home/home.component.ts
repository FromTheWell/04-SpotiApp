import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  nuevasCanciones: any[] = [];

  loading: boolean;
  error: boolean;
  errorMessage: string;

  constructor( private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe((datosNuevosLanzamientos: any) => {
      console.log(datosNuevosLanzamientos);
      this.nuevasCanciones = datosNuevosLanzamientos;
      this.loading = false;

    }, (errorServicio) => {
      this.error = true;
      console.log( errorServicio.error.error.message );
      this.errorMessage = errorServicio.error.error.message;
    });
  }

  ngOnInit() {
  }

}
