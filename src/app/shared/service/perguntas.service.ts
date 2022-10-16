import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questao } from '../model/questao';


@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  private readonly API = 'http://localhost:8080/api/jogo';

  constructor(private httpClient : HttpClient) { }

  pergunta() {
    return this.httpClient.get<Questao>(this.API + "/questao");
  }
}
