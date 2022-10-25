import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questao } from '../model/questao';
import { Pergunta } from '../model/pergunta';
import { Resposta } from '../model/resposta';
import { RespostaDTO } from '../model/dto/resposta-dto';


@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  private readonly API_JOGO      = 'http://localhost:8080/api/jogo';
  private readonly GET_QUESTION  = '/questao';
  private readonly POST_RESPONSE = '/respostaUser';
  private readonly GET_RESPOSTAS = '/consultarRespostas';

  constructor(private httpClient : HttpClient) {  }

  pergunta() {
    return this.httpClient.get<Questao>(this.API_JOGO + this.GET_QUESTION);
  }

  resposta(pergunta: Pergunta, resposta: Resposta, email: string) {
    return this.httpClient.post<void>(this.API_JOGO + this.POST_RESPONSE, { pergunta, resposta, email });
  }

  consultarRespostas(email: string) {
    return this.httpClient.post<RespostaDTO[]>(this.API_JOGO + this.GET_RESPOSTAS, { email });
  }
}
