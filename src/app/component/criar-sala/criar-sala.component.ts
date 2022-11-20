import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';

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

  constructor() {
    this.auth = getAuth()
  }

  ngOnInit(): void {
    this.user += this.auth.currentUser?.email;
  }

  printValues() {
    console.log(this.temaValue);
    console.log(this.quantValue);
    console.log(this.tempoValue);
  }

}
