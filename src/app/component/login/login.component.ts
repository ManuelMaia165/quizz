import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email    : new FormControl(),
      password : new FormControl()
    })
    this.authService.logout();
  }

  ngOnInit(
  ): void {  }

  onSubmit() {
    this.authService.login(this.formLogin.value)
      .then(response => {
        console.log(response)
        this.router.navigate(['/main']);
      })
      .catch(error => alert(error));
  }

  onRegister(){
    this.router.navigate(['/register'])
  }

}



