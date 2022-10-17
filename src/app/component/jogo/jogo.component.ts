import { PerguntasService } from './../../shared/service/perguntas.service';
import { Component, OnInit } from '@angular/core';
import { Questao } from '../../shared/model/questao';
import { Resposta } from '../../shared/model/resposta';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent implements OnInit {

  questao!: Questao;
  resultado?: Boolean;

  constructor(private perguntaService : PerguntasService ) {  }

  ngOnInit(): void {

    this.perguntaService.pergunta().subscribe(response => {
      if(response) {
        this.questao = response;
      }
    }, error => {
      console.log(error)
    });

    console.log(this.questao)
  }

  onResposta(resposta: Resposta): void {
    this.perguntaService.resposta(this.questao.pergunta, resposta).subscribe(response => {
      this.resultado = response;
      alert(this.resultado)
    }, error => {
      console.log(error)
    });
  }

}
