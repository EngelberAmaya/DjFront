import { Component, OnInit } from '@angular/core';
declare let $: any;
import { Router } from '@angular/router';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})
export class InicioComponent implements OnInit {

  mostrarYo = true;

  constructor(private router: Router, private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0); // Para que aparezca siempre lo de arriba de la apgina
    
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });

    this.noticiaService.noticiaCompleta = false;
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

  mostrarNoticia(){
    
    $(() => {
      $('[data-toggle="tooltip"]').tooltip('hide');
    });

    this.noticiaService.noticiaCompleta = true;

    setTimeout(() => {
      this.router.navigateByUrl('noticiaCompleta');
    }, 150);
  }

}
