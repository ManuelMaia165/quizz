import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentRoutingModule } from './component-routing.module';
import { JogoComponent } from './jogo/jogo.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ComponentModule { }
