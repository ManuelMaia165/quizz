import { PerguntasService } from './../../shared/service/perguntas.service';
import { Component, OnInit } from '@angular/core';
import { Questao } from '../../shared/model/questao';
import { Resposta } from '../../shared/model/resposta';
import { getAuth, Auth } from '@angular/fire/auth';
import { ResponseDTO } from 'src/app/shared/model/dto/responde-dto';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pergunta } from 'src/app/shared/model/pergunta';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent implements OnInit {

  questao$: Observable<Questao>;
  resultado?: ResponseDTO;
  auth: Auth;
  email = "";

  constructor(private perguntaService : PerguntasService, private router: Router) {
    this.questao$ = this.perguntaService.pergunta();
    this.auth = getAuth();
  }

  ngOnInit(): void {
    this.email += this.auth.currentUser?.email;
  }

  onResposta(pergunta: Pergunta, resposta: Resposta): void {
    this.perguntaService.resposta(pergunta, resposta, this.email).subscribe();
    this.router.navigate(['/result']);
  }

}
