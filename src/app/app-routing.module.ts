import { JogoComponent } from './component/jogo/jogo.component';
import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { RegisterComponent } from './component/register/register.component';
import { ResultComponent } from './component/result/result.component';
import { CriarSalaComponent } from './component/criar-sala/criar-sala.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  {
    path: 'main',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jogo', component: JogoComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'result', component: ResultComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  { path: 'criarSala', component: CriarSalaComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
