import { Router } from '@angular/router';
import { AuthService } from './../../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {  }

  ngOnInit(): void {  }

  onClick() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => alert(error));
  }

  onJogar(){
    this.router.navigate(['/jogo']);
  }

}
