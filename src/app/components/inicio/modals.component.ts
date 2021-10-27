import { Component, OnInit } from '@angular/core';
declare let $: any;
import { ModalService } from '../../services/modal.service';
import { TecnologiaSobreMiService } from '../../services/tecnologia-sobre-mi.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  tecnologiasDestacadas: any[] = [];
  sobreMi: any;
  tec1: any[] = [];
  tec2: any[] = [];
  tec3: any[] = [];

  constructor(public modalService: ModalService, public tecnologiaSobreMiService: TecnologiaSobreMiService) { }

  ngOnInit(): void {
    this.getTecnologia();
    this.getSobreMi();
  }

  getTecnologia(){
    this.tecnologiaSobreMiService.getTecnologia()
      .subscribe( (resp: any) => {
        this.tecnologiasDestacadas.push(...resp.tecnologias);
        this.tec1 = this.tecnologiasDestacadas.slice(0, 3);
        this.tec2 = this.tecnologiasDestacadas.slice(3, 6);
        this.tec3 = this.tecnologiasDestacadas.slice(6, 9);        
      });
  }

  getSobreMi(){
    this.tecnologiaSobreMiService.getSobreMi()
      .subscribe( (resp: any) => {
        this.sobreMi = resp.sobreMi;
      });
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
