import { Component, OnInit } from '@angular/core';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
declare let $: any;
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  anio: number = 0;

  constructor(public modalService: ModalService) {
    this.modalService.privacidad = true;
  }

  ngOnInit(): void {
    this.anio = new Date().getFullYear();
  }

  whatsApp(){
    Swal.fire({
      title: 'Telefono',
      text: '555 555 555',
      icon: 'success',
    })
    
  }

  salir(){
    setTimeout(() => {
      $('#privacidad').modal('hide');
    }, 1000)
  }

  privacidad() {
    this.modalService.privacidad = true;
    $('#privacidad').modal();
  }

  irAlerta() {
    $('#privacidad').modal('hide');
    setTimeout(() => {
      $('#alerta').modal();
    }, 500);
  }

}
