import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { Router } from '@angular/router';
import { Noticia, RespuestaNoticia } from 'src/app/interfaces/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: [
  ]
})
export class NoticiasComponent implements OnInit {

  noticias: Noticia[] = [];
  paginaLength = true;

  constructor(public noticiaService: NoticiaService, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.noticiaService.noticiaCompleta = false;
    this.getNoticias();
  }

  // Obtenr ultimas noticias
  getNoticias(){
    this.noticiaService.getUltimasNoticias()
      .subscribe((res: RespuestaNoticia) => {
        this.noticias.push(...res.noticias);
      });
  }

  mostrarNoticia(noticia: any){
    this.noticiaService.noticiaSel = noticia;
    console.log(this.noticiaService.noticiaSel);
    this.noticiaService.noticiaCompleta = true;
    this.router.navigateByUrl('noticiaCompleta');

  }

  restar(){
    this.paginaLength = true;
    this.noticiaService.getUltimasPaginadasMenos()
      .subscribe((resp: RespuestaNoticia) => {
        this.noticias = resp.noticias;
      });
  }

  sumar(){
    this.noticiaService.getUltimasPaginadasMas()
      .subscribe((resp: RespuestaNoticia) => {
        this.noticias = resp.noticias;

        if(resp.noticias.length !== 8){
          this.paginaLength = false;
        } 

        if(resp.noticias.length === 0){
          this.restar();
           this.paginaLength = false;
        }

      });
  }

}
