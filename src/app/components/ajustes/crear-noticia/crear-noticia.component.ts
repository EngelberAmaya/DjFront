import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NoticiaService } from 'src/app/services/noticia.service';
import { TooltipService } from 'src/app/services/tooltip.service';
import { environment } from 'src/environments/environment';
const URL = environment.url;

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styles: []
})
export class CrearNoticiaComponent implements OnInit {


  imagenNoticiaSubir: any;
  imagenAutorSubir: any;

  imagenSel1: string | ArrayBuffer | any;
  imagenSel2: string | ArrayBuffer | any;

  mostrarNombre = false;
  mostrarImagenNoticia = false;
  mostrarImagen = false;
  mostrar = true;
  mostrarNoticia = true;
  mostrarFormNoticia = false;

  noticia: any = {
    titulo: '',
    subtitulo: '',
    autor: '',
    img: '',
    imgAutor: '',
    texto1: '',
    texto2: '',
    texto3: '',
    texto4: '',
    texto5: ''
  };


  constructor(
    public usuarioService: UsuarioService,
    private http: HttpClient,
    public noticiaService: NoticiaService,
    public tooltipService: TooltipService) { }

  ngOnInit(): void {
  }

  ocultarBoton() {
    this.mostrarNoticia = false;
    this.tooltipService.settings = false;
    this.tooltipService.settings2 = false;
  }

  seleccionImgNoti(e: any) {
    this.imagenNoticiaSubir = e.target.files[0];
    this.mostrarImagenNoticia = true;
    this.mostrar = false;
    const reader = new FileReader();
    reader.onload = () => this.imagenSel1 = reader.result;
    reader.readAsDataURL(e.target.files[0]);
    
  }

  seleccionImg(e: any) {
    this.imagenAutorSubir = e.target.files[0];
    this.mostrarImagen = true;
    const reader = new FileReader();
    reader.onload = () => this.imagenSel2 = reader.result;
    reader.readAsDataURL(e.target.files[0]);
  }

  subirImagen() {
    const headers = {
      miToken: this.usuarioService.token
    };

    const formData = new FormData();
    formData.append('imgAutor', this.imagenAutorSubir, this.imagenAutorSubir.name);
    return this.http
      .post(`${URL}/noticias/upload`, formData, { headers })
      .subscribe((res: any) => {
       
      });
  }

  subirImagenNoticia() {
    const headers = {
      miToken: this.usuarioService.token
    };

    const formData = new FormData();
    formData.append('img', this.imagenNoticiaSubir, this.imagenNoticiaSubir.name);
    return this.http
      .post(`${URL}/noticias/upload2`, formData, { headers })
      .subscribe(res => {
       
      });
  }

  forularioNoticia() {
    this.mostrarFormNoticia = true;
  }

  salirNoticia() {
    this.mostrarFormNoticia = false;
    this.mostrarNoticia = true;
    this.mostrar = true;
    this.mostrarImagenNoticia = false;
    this.mostrarImagen = false;
    this.tooltipService.settings = true;
    this.tooltipService.settings2 = true;
    window.scrollTo(0, 0);
  }

  crearNoticia(f: NgForm) {
    this.subirImagenNoticia();
    this.subirImagen();
    this.salirNoticia();

    this.noticiaService.crearNoticia(
      this.noticia.titulo,
      this.noticia.subtitulo,
      this.noticia.autor,
      this.imagenNoticiaSubir.name,
      this.imagenAutorSubir.name,
      this.noticia.texto1,
      this.noticia.texto2,
      this.noticia.texto3,
      this.noticia.texto4,
      this.noticia.texto5);

    this.noticia = [];
    this.tooltipService.settings = true;
    this.tooltipService.settings2 = true;
    window.scrollTo(0, 0);

     Swal.fire({
        title: 'Operacion exitosa',
        text: 'Noticia creada correctamente',
        icon: 'success',
    })
  }

}
