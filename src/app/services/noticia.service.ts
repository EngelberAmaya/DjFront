import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RespuestaNoticia } from '../interfaces/noticias';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticiaSel: any;
  noticiaCompleta = false;
  pagina = 1;

  constructor(private http: HttpClient) { }

  getUltimasNoticias() {
    return this.http.get<RespuestaNoticia>(`${URL}/noticias/?pagina=${this.pagina}`);
  }

  getUltimasPaginadasMas() {
    this.pagina++;
    return this.http.get<RespuestaNoticia>(`${URL}/noticias/?pagina=${this.pagina}`);
  }

  getUltimasPaginadasMenos() {

    if(this.pagina <= 1){
      this.pagina = 1;
    } else {
      this.pagina--;
    }

    return this.http.get<RespuestaNoticia>(`${URL}/noticias/?pagina=${this.pagina}`);
  }
}
