import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { ComponentRoutingModule } from './component-routing.module';
import { JogoComponent } from './jogo/jogo.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    JogoComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    AppMaterialModule

  ]
})
export class ComponentModule { }
