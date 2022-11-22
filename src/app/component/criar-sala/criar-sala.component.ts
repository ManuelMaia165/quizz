import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { SalaService } from '../../shared/service/sala.service';
import { Router } from '@angular/router';

interface Tema {
  label: string;
  value: string;
}

@Component({
  selector: 'app-criar-sala',
  templateUrl: './criar-sala.component.html',
  styleUrls: ['./criar-sala.component.scss']
})
export class CriarSalaComponent implements OnInit {

  auth: Auth;
  user         = "";

  /* Valores para os select */
  quantPlayers = [2, 3, 4, 5];
  temas: Tema[] = [
    { label: "O que é, o que é", value: "O QUE É, O QUE É" }
  ];
  tempoPartida = [10, 15, 20, 25, 30]

  /* Variaveis para bind dos valores informados pelos usuários */
  temaValue  = "";
  quantValue = 0;
  tempoValue = 0;

  constructor(private apiSala: SalaService, private router: Router) {
    this.auth = getAuth()
  }

  ngOnInit(): void {
    this.user += this.auth.currentUser?.email;
  }

  createSala() {
    this.apiSala.createSala(this.temaValue, this.quantValue, this.tempoValue, this.user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    this.router.navigate(['listarSala']);
  }

}
