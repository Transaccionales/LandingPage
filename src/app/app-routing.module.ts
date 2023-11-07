import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { registerLocaleData } from '@angular/common';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import {RecuperarComponent} from "./recuperar/recuperar.component";
import {CategoriasComponent} from "./categorias/categorias.component";

const routes: Routes = [
  {
    path:"",
    component: LandingPageComponent
  },
  {
    path:"iniciar-sesion",
    component: IniciarSesionComponent
  },
  {
    path:"registrarse",
    component: RegistrarseComponent
  },
  {
    path:"recuperar",
    component: RecuperarComponent
  },
  {
    path:"categorias",
    component: CategoriasComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
