import { Component, OnInit } from '@angular/core';
declare let $: any;
import { ImagenesService } from 'src/app/services/imagenes.service';
import { TecnologiaSobreMiService } from 'src/app/services/tecnologia-sobre-mi.service';
import { TooltipService } from 'src/app/services/tooltip.service';
import { Foto } from 'src/app/interfaces/foto';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styles: [
  ]
})
export class AjustesComponent implements OnInit {

  fotoSel: Foto;
  tecnologiasDestacadas: any[] = [];
  sobreMiBackend: any;

  constructor(public imagenesService: ImagenesService,
              public tecnologiaSobreMiService: TecnologiaSobreMiService,
              public tooltipService: TooltipService) { }

  ngOnInit(): void {
    //window.scrollTo(0, 0);
    this.tooltipService.abrirTooltip();
   
    setTimeout(() => {
     this.tooltipService.abrirTooltipHover();
    }, 150);

    this.obtenerTecnologias();
    this.obtenerSobreMi();  
  }

  obtenerTecnologias(){
    this.tecnologiaSobreMiService.getTecnologia()
        .subscribe((resp: any) => {
          this.tecnologiasDestacadas.push(...resp.tecnologias)
        })
  }

  obtenerSobreMi(){
    this.tecnologiaSobreMiService.getSobreMi()
        .subscribe(async (resp: any) => {
          this.sobreMiBackend = await resp.sobreMi[0];
        })
  }


  editarFoto(img: Foto){
    this.fotoSel = img;
    
    if(this.fotoSel.img === this.imagenesService.img1){
      $('#imagen').modal();
      this.imagenesService.imagenNombre = '1.jpg';
      this.imagenesService.imagenPath = this.fotoSel.img;
      this.tooltipService.cerrarTooltip();
    }

    if(this.fotoSel.img === this.imagenesService.img2){
      $('#imagen').modal();
      this.imagenesService.imagenNombre = '4a.jpg';
      this.imagenesService.imagenPath = this.fotoSel.img;
      this.tooltipService.cerrarTooltip();
    }

    if(this.fotoSel.img === this.imagenesService.img3){
      $('#imagen').modal();
      this.imagenesService.imagenNombre = '5a.jpg';
      this.imagenesService.imagenPath = this.fotoSel.img;
      this.tooltipService.cerrarTooltip();
    }

    if(this.fotoSel.img === this.imagenesService.img4){
      $('#imagen').modal();
      this.imagenesService.imagenNombre = '8a.jpg';
      this.imagenesService.imagenPath = this.fotoSel.img;
      this.tooltipService.cerrarTooltip();
    }

  }

  editarTec(tec: string){
    this.tecnologiaSobreMiService.mostrarTec = true;
    this.tecnologiaSobreMiService.tecSel = tec;
    this.tooltipService.cerrarTooltip();
    setTimeout(() => {
     $('#tecnologia').modal();
    }, 150)
  }

  actualizarSobreMi(){
    this.tecnologiaSobreMiService.mostrarSobreMi = true;
    this.tooltipService.settings = false;
    this.tooltipService.settings3 = false;
  }

  actualizarSobreMiFull(f: NgForm){
    this.tecnologiaSobreMiService.actualizarSobreMi(this.sobreMiBackend, this.sobreMiBackend._id);
    this.tecnologiaSobreMiService.mostrarSobreMi = false;
    this.tooltipService.settings = true;
    this.tooltipService.settings3 = true;
    window.scrollTo(0, 0);
    Swal.fire({
        title: 'Operación exitosa',
        text: 'Sobre mi Modificado correctamente',
        icon: 'success',
    })
  }

  cerrarSobreMi(){
    this.tecnologiaSobreMiService.mostrarSobreMi = false;
    this.tooltipService.settings = true;
    this.tooltipService.settings3 = true;
    window.scrollTo(0, 0);
  }

}
