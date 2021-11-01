import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MensajesService } from 'src/app/services/mensajes.service';
import { NgForm } from '@angular/forms';
declare let $: any;
import Swal from 'sweetalert2'

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: []
})
export class ModalsComponent implements OnInit {

  mensaje = {
    email: '',
    mensaje: ''
  };

  usuarioLogin = {
    nombre: '',
    password: ''
  };

  constructor(public modalService: ModalService, public usuarioService: UsuarioService,
              public mensajesService: MensajesService) {
    this.modalService.privacidadSeleccionada = true;
  }

  ngOnInit(): void { }

  politicaPrivacidad() {
    this.modalService.politicaPrivacidad();
  }

  cambioPrivacidad() {
    this.modalService.cambioPrivacidad();
  }

  contacto() {
    this.modalService.contacto();
  }

  contactoFede(f: NgForm){

    if(f.invalid){
      //$('#contacto').modal('hide');
      this.limpiarMensaje();
      Swal.fire({
        title: 'Todos los campos son obligatorios',
        icon: 'error',
      });
      

    }else {
       $('#contacto').modal('hide');
       this.mensajesService.crearMensaje(this.mensaje.email, this.mensaje.mensaje);
       this.limpiarMensaje();
       Swal.fire({
        title: 'Mensaje enviado correctamente',
        icon: 'success',
       });
      
    }
   
  }

  limpiarMensaje(){
    this.usuarioLogin.nombre = '';
    this.usuarioLogin.password = ''
  }

  limpiarUsuario(){
    this.mensaje.email = '';
    this.mensaje.mensaje = ''
  }

  async login(forma: NgForm){
    
    if(forma.invalid){
      this.salirLogin();
    }

    const usuarioValido = await this.usuarioService.login(this.usuarioLogin.nombre, this.usuarioLogin.password) 

    if(usuarioValido){
      this.salirLogin();
      this.usuarioService.autenticado = true;
      
        $('.navbar-collapse').collapse('hide');

        Swal.fire({
          title: 'Federica ONLINE',
          icon: 'success',
          position: 'top'
        });

        this.limpiarUsuario();
        this.modalService.online = true;

     
    } else {

      Swal.fire({
        title: 'El nombre o el usuario no son correctos.!',
        icon: 'error',
        position: 'top'
      });

      $('.navbar-collapse').collapse('hide');
      this.salirLogin();
      this.limpiarUsuario();
    }
  }

  salirLogin(){
    $('#loginModal').modal('hide');
  }

}