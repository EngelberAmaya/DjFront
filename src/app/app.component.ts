import { Component } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FedericaDJ';

  constructor(){
    setTimeout(() => {
      $('#cookieModal').modal();
    }, 100)
  }

  salir(){
    setTimeout(() => {
      //window.history.back(); // me retorna a la pagina anterior
      $('[data-toggle="tooltip"]').tooltip('hide');
    }, 400)
  }
}
