import { AuthService } from './../../shared/service/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 email : string = '';
 password : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  login() {
    if(this.email == ''){
    alert('Insira o email');
    return;
  }

    if(this.password == ''){
      alert('Insira a senha');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
}}
