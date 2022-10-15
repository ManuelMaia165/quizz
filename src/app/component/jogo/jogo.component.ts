import { PerguntasService } from './../../shared/service/perguntas.service';
import { Pergunta } from './../../shared/model/pergunta';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent implements OnInit {

  perguntas: Observable<Pergunta[]>;

  constructor(private perguntaService : PerguntasService ) {
      this.perguntas = this.perguntaService.list();
  }

  ngOnInit(): void {
  }

}
