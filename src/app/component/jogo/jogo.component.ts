import { PerguntasService } from './../../shared/service/perguntas.service';
import { Component, OnInit } from '@angular/core';
import { Questao } from '../../shared/model/questao';
import { Resposta } from '../../shared/model/resposta';
import { getAuth, Auth } from '@angular/fire/auth';
import { ResponseDTO } from 'src/app/shared/model/dto/responde-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent implements OnInit {

  questao!: Questao;
  resultado?: ResponseDTO;
  auth: Auth;
  email = "";

  constructor(private perguntaService : PerguntasService, private router: Router) {
    this.perguntaService.pergunta().subscribe(response => {
      if(response) {
        this.questao = response;
      }
    }, error => {
      console.log(error);
    });
    this.auth = getAuth();
  }

  ngOnInit(): void {
    console.log(this.auth.currentUser?.email);
    this.email += this.auth.currentUser?.email;
  }

  onResposta(resposta: Resposta): void {
    this.perguntaService.resposta(this.questao.pergunta, resposta, this.email).subscribe(response => {
      if(response) {
        this.resultado = response;
      }
    }, error => {
      console.log(error)
    });

    this.router.navigate(["/result", this.resultado])
  }

}
