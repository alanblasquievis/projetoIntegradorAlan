import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ResumoComponent } from './resumo/resumo.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'resumo', component: ResumoComponent},
  {path: 'contato', component: ContatoComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
