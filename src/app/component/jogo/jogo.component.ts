import { PerguntasService } from './../../shared/service/perguntas.service';
import { Component, OnInit } from '@angular/core';
import { Questao } from '../../shared/model/questao';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent implements OnInit {

  questao!: Questao;

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

}
