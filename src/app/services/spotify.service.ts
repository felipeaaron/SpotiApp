import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('listo');
   }

   getNewReleases( ){

const headers= new HttpHeaders({
  'Authorization': 'Bearer BQDsk0Yq9FbfRK9FPOjlar291FDMZDPSMDcOLzMGFx89wUzhEyRcdjenoaFdy74fZ1hJUQSezYoDDm0YAeI'
});

  return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers});
   }

getArtista( termino: string){

  const headers= new HttpHeaders({
    'Authorization': 'Bearer BQDsk0Yq9FbfRK9FPOjlar291FDMZDPSMDcOLzMGFx89wUzhEyRcdjenoaFdy74fZ1hJUQSezYoDDm0YAeI'
  });
  
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, { headers});
     }
}


