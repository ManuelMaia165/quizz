import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { ComponentRoutingModule } from './component-routing.module';
import { JogoComponent } from './jogo/jogo.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ResultComponent } from './result/result.component';
import { CriarSalaComponent } from './criar-sala/criar-sala.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ListarSalasComponent } from './listar-salas/listar-salas.component';
import { RankingComponent } from './ranking/ranking.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MainComponent,
    JogoComponent,
    ResultComponent,
    CriarSalaComponent,
    PerfilComponent,
    ListarSalasComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class ComponentModule { }
