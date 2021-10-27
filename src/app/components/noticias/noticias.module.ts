import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';


@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    PipesModule
  ]
})
export class NoticiasModule { }
