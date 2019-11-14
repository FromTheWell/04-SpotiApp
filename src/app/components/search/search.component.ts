import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  constructor(private spotify: SpotifyService) { }

  busquedaArtista: any[] = [];

  buscar( termino: string) {
    console.log( termino );
    this.spotify.getArtist( termino )
    .subscribe( (datosBusqueda: any) => {
      console.log(datosBusqueda);
      this.busquedaArtista = datosBusqueda;
    });

  }

}
