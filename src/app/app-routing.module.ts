import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'  },
  { path: 'login',
    loadChildren: () => import('./component/login/login.component').then(m => m.LoginComponent) },
  { path: 'dashboard',
  loadChildren: () => import('./component/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'jogo',
  loadChildren: () => import('./component/jogo/jogo.component').then(m => m.JogoComponent) },
  { path: 'register',
  loadChildren: () => import('./component/register/register.component').then(m => m.RegisterComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
