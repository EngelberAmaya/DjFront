import { Component, OnInit } from '@angular/core';
declare let $: any;
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2'
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  ojo = true;
  login1: boolean;
  clave = '';
  input1: boolean;

  constructor(public modalService: ModalService, public mensajesService: MensajesService) { 
    this.modalService.ojo2 = true;
  }

  ngOnInit(): void {
    this.mensajesService.suma;
  }

  cerrarNavbar(){
    $('.navbar-collapse').collapse('hide');
    /*this.login1 = false;
    this.input1 = false;*/
  }
  
  alerta() {
    $('#alerta').modal();
    this.cerrarNavbar();
  }

  entrar(){
    this.login1 = false;
    this.input1 = true;
    $('[data-toggle="tooltip"]').tooltip('hide');

    $(document).ready(() => {
       $('#focusClave').trigger('focus');
    });
  }

  onClick1(){
    this.ojo = false;
    this.login1 = false;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  onClick2(){
    this.ojo = true;
    this.login1 = true;
     this.modalService.ojo2 = false;
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  inputLogin(){
    if(this.clave !== '123'){
      this.login1 = false;
      this.input1 = false;
      this.clave = '';
      this.cerrarNavbar();
    } else {
      this.login1 = false;
      this.input1 = false;
      this.clave = '';
      this.cerrarNavbar();
      // Abrir el modal del login
      $('#loginModal').modal();
      $(document).ready(() => {
        $('#loginModal').on('shown.bs.modal', () => {
          $('#focusLogin').trigger('focus');
        });
      });
    }
  }

  logOut(){
    this.cerrarNavbar();
    this.modalService.logOut();
    Swal.fire({
      title: 'Federica OFFLINE',
      icon: 'success',
      position: 'top'
    });
  }

}
