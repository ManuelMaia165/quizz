import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questao } from '../model/questao';
import { Pergunta } from '../model/pergunta';
import { Resposta } from '../model/resposta';


@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  private readonly API           = 'http://localhost:8080/api/jogo';
  private readonly GET_QUESTION  = '/questao';
  private readonly POST_RESPONSE = '/respostaUser';

  constructor(private httpClient : HttpClient) { }

  pergunta() {
    return this.httpClient.get<Questao>(this.API + this.GET_QUESTION);
  }

  resposta(pergunta: Pergunta, resposta: Resposta) {
    return this.httpClient.post<boolean>(this.API + this.POST_RESPONSE, {pergunta, resposta});
  }
}
