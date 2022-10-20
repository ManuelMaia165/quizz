import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questao } from '../model/questao';
import { Pergunta } from '../model/pergunta';
import { Resposta } from '../model/resposta';
import { ResponseDTO } from '../model/dto/responde-dto';


@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  private readonly API           = 'http://localhost:8081/api/jogo';
  private readonly GET_QUESTION  = '/questao';
  private readonly POST_RESPONSE = '/respostaUser';

  constructor(private httpClient : HttpClient) {  }

  pergunta() {
    return this.httpClient.get<Questao>(this.API + this.GET_QUESTION);
  }

  resposta(pergunta: Pergunta, resposta: Resposta, username: string) {
    return this.httpClient.post<ResponseDTO>(this.API + this.POST_RESPONSE, {pergunta, resposta, username});
  }
}
