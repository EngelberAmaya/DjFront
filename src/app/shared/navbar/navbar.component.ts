import { Component, OnInit } from '@angular/core';
declare let $: any;
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2'
import { MensajesService } from 'src/app/services/mensajes.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { TooltipService } from 'src/app/services/tooltip.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  ojo = true;
  login1: boolean;
  clave = '617481b62d6b6f1b98defba5'; //ejemplo
  input1: boolean;

  constructor(public modalService: ModalService, public mensajesService: MensajesService,
              public usuarioService: UsuarioService, public tooltipService: TooltipService) { 
    this.modalService.ojo2 = true;
  }

  ngOnInit(): void {
    this.mensajesService.suma;
    this.usuarioService.getId();

  }

  cerrarNavbar(){
    $('.navbar-collapse').collapse('hide');
    /*this.login1 = false;
    this.input1 = false;*/
     window.scrollTo(0, 0);
  }
  
  alerta() {
    $('#alerta').modal();
    this.cerrarNavbar();
  }

  entrar(){
    this.login1 = false;
    this.input1 = true;

    $(document).ready(() => {
       $('#focusClave').trigger('focus');
    });

    this.tooltipService.cerrarTooltip();
  }

  onClick1(){
    this.ojo = false;
    this.login1 = false;
    this.tooltipService.abrirTooltip();
  }

  onClick2(){
    this.ojo = true;
    this.login1 = true;
    this.modalService.ojo2 = false;
    this.tooltipService.abrirTooltip();
  }

  inputLogin(){
    if(this.clave !== this.usuarioService.pass){
      this.login1 = false;
      this.input1 = false;
      this.clave = '';
      this.cerrarNavbar();
    } else {
      this.login1 = false;
      this.input1 = false;
      this.clave = '';
     
      // Abrir el modal del login
      $('#loginModal').modal();
      $(document).ready(() => {
        $('#loginModal').on('shown.bs.modal', () => {
          $('#focusLogin').trigger('focus');
        });
      });

      this.cerrarNavbar();
    }
  }

  logOut(){
    this.usuarioService.logOut();
    this.cerrarNavbar();
    this.modalService.logOut();
    Swal.fire({
      title: 'Federica OFFLINE',
      icon: 'success',
      position: 'top'
    });
  }

}
