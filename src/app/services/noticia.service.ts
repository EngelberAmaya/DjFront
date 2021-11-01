import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RespuestaNoticia } from '../interfaces/noticias';
import { UsuarioService } from 'src/app/services/usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  noticiaSel: any;
  noticiaCompleta = false;
  pagina = 1;

  constructor(private http: HttpClient, public usuarioService: UsuarioService) { }

  getUltimasNoticias() {
    return this.http.get<RespuestaNoticia>(`${URL}/noticias/?pagina=1`);
  }

  getUltimasNoticias2() {
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

  crearNoticia(titulo: string, subtitulo: string, autor: string, img: string,
               imgAutor: string, texto1: string, texto2: string, texto3: string,
               texto4: string, texto5: string){

    const headers = {
      miToken: this.usuarioService.token
    }

    const data = { titulo, subtitulo, autor, img, imgAutor, texto1, texto2, texto3, texto4, texto5 };

    return this.http.post<RespuestaNoticia>(`${URL}/noticias/${img}/${imgAutor}`, data, {headers})
        .subscribe();

  }
}
