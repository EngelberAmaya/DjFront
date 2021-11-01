import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public usuarioService: UsuarioService){}

  canActivate(): boolean {
    if(this.usuarioService.autenticado === true){
      return true;
    } else {
      return false;
    }   
    
  }
  
}
