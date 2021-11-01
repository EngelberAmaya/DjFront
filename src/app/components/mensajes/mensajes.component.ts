import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: [
  ]
})
export class MensajesComponent implements OnInit {

  mensajeEmail: any[] = [];
  mensajeSel: any;

  constructor(public mensajesService: MensajesService, private router: Router) { }

  ngOnInit() {
    this.obtenerMensajes();
    this.mensajesService.sumarMensaje();
    //window.scrollTo(0, 0);
  }

  obtenerMensajes(){
    this.mensajesService.getMensajes()
        .subscribe((resp: any) => {
          
          this.mensajeEmail = resp.mensajes;

          if(this.mensajeEmail.length === 0){
             Swal.fire({
              title: 'Mensaje',
              text: 'No hay ningun mensaje',
              icon: 'warning',
            })
          }

        })
  }

  async borrarMensaje(mensaje: string){
    this.mensajeSel = mensaje;
    await this.mensajesService.borrarMensaje(this.mensajeSel._id)
        .subscribe( () => {
          this.router.navigateByUrl('/inicio', { skipLocationChange: true })
              .then(() => this.router.navigate(['mensajes']))
        });

        Swal.fire({
          title: 'Operación exitosa',
          text: 'Mensaje Eliminado',
          icon: 'success',
        })
  }

}
