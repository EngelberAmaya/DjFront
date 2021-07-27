import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
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
    nombre: 'Federica',
    password: '123'
  };

  constructor(public modalService: ModalService) {
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
       this.limpiarMensaje();
       Swal.fire({
        title: 'Mensaje enviado correctamente',
        icon: 'success',
       });
      
    }
    console.log(f.value);
  }

  limpiarMensaje(){
    this.usuarioLogin.nombre = '';
    this.usuarioLogin.password = ''
  }

  limpiarUsuario(){
    this.mensaje.email = '';
    this.mensaje.mensaje = ''
  }

  login(forma: NgForm){
    console.log(forma.value);

    if(this.usuarioLogin.nombre === 'Federica' && this.usuarioLogin.password === '123'){
      this.salirLogin();
      setTimeout(() => {
        $('.navbar-collapse').collapse('hide');

        Swal.fire({
          title: 'Federica ONLINE',
          icon: 'success',
          position: 'top'
        });

        this.limpiarUsuario();
        this.modalService.online = true;

      }, 1000);
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