import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { pluck } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string;
  autenticado = false;
  pass = '';

  constructor(private http: HttpClient, private router: Router) { }

  login(nombre: string, password: string){

    const data = {nombre, password};

    return new Promise( resolve => {
      this.http.post(`${URL}/usuario/login`, data)
        .subscribe( (resp: any) => {
      
          if(resp.ok){
            this.guardarToken(resp.token);
            
            resolve(true);
          } else {
            resolve(false);
            this.logOut();
          }
          
        })
    })

  }

  guardarToken(token: string){
    this.token = token;
  }

  logOut(){
    this.token = '';
    this.autenticado = false;
    this.router.navigateByUrl('inicio')
  }

  getId(){
    return this.http.get(`${URL}/sobreMi`)
      .pipe(
        pluck('sobreMi', '0', '_id')
      ).subscribe((resp: any) => {
        this.pass = resp;
      })
  }

}
