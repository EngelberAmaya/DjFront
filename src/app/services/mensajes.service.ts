import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  suma: number;

  constructor(private http: HttpClient, private router: Router) { }

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

  crearMensaje(email: string, mensaje: string){
    const data = {email, mensaje};
    return this.http.post(`${URL}/contacto`, data)
       .subscribe(() => {
          this.router.navigateByUrl('/inicio', { skipLocationChange: true })
              .then(() => this.router.navigate(['mensajes']))
        })
  }
}
