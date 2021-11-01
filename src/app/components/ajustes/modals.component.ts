import { Component, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/services/imagenes.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
declare let $: any;
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { TecnologiaSobreMiService } from 'src/app/services/tecnologia-sobre-mi.service';

const URL = environment.url;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  constructor(public imagenesService: ImagenesService, public usuarioService: UsuarioService,
              private http: HttpClient, public tecnologiaSobreMiService: TecnologiaSobreMiService) { }

  ngOnInit(): void {
  }

  seleccionImg(e: any){
   
    this.imagenesService.mostrarNombre = true;
    this.imagenesService.imagenSubir = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => this.imagenesService.imagenSel = reader.result;
    reader.readAsDataURL(e.target.files[0]);
 
  }

  cambiarMostrar(){
     this.imagenesService.mostrarNombre = false;
  }

  actualizarImagen(){
    if(this.imagenesService.imagenNombre !== this.imagenesService.imagenSubir.name){
      $('#imagen').modal('hide');
      this.cambiarMostrar();
    } else {

      const headers = {
        miToken: this.usuarioService.token
      };

      const formData = new FormData();
      formData.append('img', this.imagenesService.imagenSubir, this.imagenesService.imagenSubir.name)

      return this.http.post(`${URL}/upload/update`, formData, {headers})
          .subscribe( resp => {
            
            setTimeout(() => {
              $('#imagen').modal('hide');
            }, 100);
            this.cambiarMostrar()

            Swal.fire({
              title: 'Modificación exitosa',
              text: 'Imagen Modificada',
              icon: 'success',
            })

          })
    }
  }

  actualizarTec(f: NgForm){
    this.tecnologiaSobreMiService.actualizarTecnologia(this.tecnologiaSobreMiService.tecSel, this.tecnologiaSobreMiService.tecSel._id);
    $('#tecnologia').modal('hide');
    Swal.fire({
        title: 'Operación exitosa',
        text: 'Tecnologia Modificada',
        icon: 'success',
    })
  }

}
