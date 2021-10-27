import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  suma: number;

  constructor(private http: HttpClient) { }

  getMensajes(){
    return this.http.get(`${URL}/contacto`)
  }

  borrarMensaje(id: string){
    return this.http.delete(`${URL}/contacto/${id}`)
  }

  sumarMensaje(){
    this.getMensajes().subscribe((resp: any) => {
      this.suma = resp.mensajes.length;
    });
  }
}
