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
<<<<<<< HEAD
      'Authorization': 'Bearer BQDV39h_nuV4ifsFTxLDL1eFbWoMgqW1Umbtb7ZP5AZMFLedfP1h-dzuRwa37iBo9r4ha_dFvviYIQGolQk',
=======
      'Authorization': 'Bearer BQCtEtnQT46UoU8J0zoYswH__tHYodD3OR2pSTlQfRIvf153vJN1TbN_FMBj-OhLrcEnhfQgbr6_oCrUfvU',
>>>>>>> Develop
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
