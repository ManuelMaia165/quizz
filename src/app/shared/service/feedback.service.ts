import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comentario } from '../model/comentario';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private readonly API_COMENTARIOS = 'http://localhost:3000/comentarios/';

  constructor(private httpClient : HttpClient ) {  }

  get_comentarios() {
    return this.httpClient.get<Comentario[]>(this.API_COMENTARIOS);
  }

  post_comentario(mensagem: string) {
    return this.httpClient.post(this.API_COMENTARIOS,
      {
        "mensagem": mensagem,
        "like": 0,
        "deslike": 0
      }
    );
  }

  put_comentario_like_or_deslike(id: number, like: number, deslike: number) {
    return this.httpClient.put(this.API_COMENTARIOS + id,
      {
        "like": like,
        "deslike": deslike
      }
    );
  }


}
