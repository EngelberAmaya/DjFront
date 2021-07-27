import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaCompletaComponent } from './noticia-completa.component';

const routes: Routes = [
  { path: '', component: NoticiaCompletaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiaCompletaRoutingModule { }
