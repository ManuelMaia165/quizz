import { Pergunta } from './../model/pergunta';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PerguntasService {

  private readonly API = '/src/assets/cursos.json';

  constructor(private HttpClient : HttpClient) { }

  list() {
    return this.HttpClient.get<Pergunta[]>(this.API)
    .pipe(
      tap(perguntas => console.log(perguntas))
    );

  }
}
