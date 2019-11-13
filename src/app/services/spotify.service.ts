import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  // Metodo automatico de importación de Servicios -> Evitamos importarlo en app.modules.ts
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(  private http: HttpClient) {
    console.log('Servicio de Spotify Listo!');
  }

  getNewReleases() {
    // El valor de este GET está condicionado por un Token de Spotify que tiene de duración 1 hora

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBBTokw6ycvix3q67piMEUN21kch1c1Y_0MI_OynQ-UqgPxN2yvK0RUmwbdyEeJ9L_787Pjvx-w42zBw0c',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
