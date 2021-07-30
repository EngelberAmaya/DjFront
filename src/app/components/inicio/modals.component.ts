import { Component, OnInit } from '@angular/core';
declare let $: any;
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
  }

  cerrarTec(){
    this.modalService.cerrarTec(); 
  }

  pagina1(){
    this.modalService.pagina1();
  }

  pagina2(){
    this.modalService.pagina2();
  }

  pagina3(){
    this.modalService.pagina3();
  }

  cerrarSobreMi(){
    this.modalService.cerrarSobreMi();
  }

}
