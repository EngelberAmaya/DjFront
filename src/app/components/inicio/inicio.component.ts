import { Component, OnInit } from '@angular/core';
declare let $: any;
import { Router } from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';
import { ImagenesService } from '../../services/imagenes.service';
import { Noticia, RespuestaNoticia } from 'src/app/interfaces/noticias';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  mostrarYo = true;
  noticias: Noticia[] = [];

  constructor(private router: Router, private noticiaService: NoticiaService,
              public imagenesService: ImagenesService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Para que aparezca siempre lo de arriba de la pagina

    setTimeout(() => {
      $(() => {
        $('[data-toggle="tooltip"]').tooltip({
          trigger: 'hover'
        });
      });
    }, 150)
    

    this.noticiaService.noticiaCompleta = false;

    this.getUltimasNoticias();
  }

  // Obtenr ultimas 3 noticias
  getUltimasNoticias(){
    this.noticiaService.getUltimasNoticias()
      .subscribe((res: RespuestaNoticia) => {
        this.noticias.push(...res.noticias.slice(0, 3));
      });
  }

  mostrar(){
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias(){
    $('#modalTecnologias').modal();
  }

  sobreMi(){
    $('#sobreMi').modal();
  }

  mostrarNoticia(noticia: Noticia){
    
    $('[data-toggle="tooltip"]').tooltip('hide');    

    this.noticiaService.noticiaCompleta = true;
    this.noticiaService.noticiaSel = noticia;
   
    setTimeout(() => {
      this.router.navigateByUrl('noticiaCompleta');
    }, 600);
  }

}
