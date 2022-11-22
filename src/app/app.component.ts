import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './shared/service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quizz';

  mostrarMenu : boolean = false;

  constructor(private authService: AuthService, private router : Router){
    this.authService.mostrarLogout.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  onLogout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => alert(error));
  }

  onPerfil() {
    this.router.navigate(['/perfil'])
  }

  onRanking() {
    this.router.navigate(['/ranking'])
  }
}
