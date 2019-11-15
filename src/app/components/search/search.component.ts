import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  constructor(private spotify: SpotifyService) {

  }

  busquedaArtista: any[] = [];

  loading: boolean;

  buscar( termino: string) {
    this.loading = true;
    console.log( termino );
    this.spotify.getArtists( termino )
    .subscribe( (datosBusqueda: any) => {
      console.log(datosBusqueda);
      this.busquedaArtista = datosBusqueda;
      this.loading = false;
    });

  }

}
