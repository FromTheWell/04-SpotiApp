import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  // Metodo automatico de importación de Servicios -> Evitamos importarlo en app.modules.ts
  providedIn: 'root'
})
export class SpotifyService {
  releases: any[] = [];
  constructor(  private http: HttpClient) {
    console.log('Servicio de Spotify Listo!');
  }

  getNewReleases() {
    // El valor de este GET está condicionado por un Token de Spotify que tiene de duración 1 hora

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQB3xcUAbmLaw1uj0HZLLlaiy3oRQlX03Ep6ozY5dMQcNdjTEtELwNqamTkvlPQ324QEtuwLPQ4tKUmQu4M',
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).subscribe((datosNuevasPublicaciones: any) => {
      console.log(datosNuevasPublicaciones);
      this.releases = datosNuevasPublicaciones;
    });
  }
}
