import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Filtrado de observables
import { map } from "rxjs/operators";

@Injectable({
  // Metodo automatico de importación de Servicios -> Evitamos importarlo en app.modules.ts
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(  private http: HttpClient) {
    console.log('Servicio de Spotify Listo!');
  }

  // Centralizando las peticions de Spotify
  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    // El valor de este GET está condicionado por un Token de Spotify que tiene de duración 1 hora

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAGphL_n7ITK7dhm9qzTFrh20Rgk50cLg7QnnA16unxLUj3B0JMu42wXGMYB64RzQW78XH6z7kzcFwhdHI',
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
    .pipe( map(datosNuevosLanzamientos => datosNuevosLanzamientos['albums'].items));
  }

  getArtist( termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map( datosBusqueda => datosBusqueda['artists'].items));

  }
}
