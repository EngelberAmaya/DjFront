import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';
import { NoticiaCompletaRoutingModule } from './noticia-completa-routing.module';
import { NoticiaCompletaComponent } from './noticia-completa.component';

@NgModule({
  declarations: [NoticiaCompletaComponent],
  imports: [
    CommonModule,
    NoticiaCompletaRoutingModule,
    PipesModule
  ]
})
export class NoticiaCompletaModule { }
