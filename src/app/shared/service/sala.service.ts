import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MensagemDTO } from '../model/dto/mensagem-dto';
import { Sala } from '../model/sala';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private readonly API_SALA    = 'http://127.0.0.1:5000';
  private readonly POST_SALA   = '/lobbys/';
  private readonly GET_RANKING = '/lobbysaux/ranking/';

  constructor(private httpClient: HttpClient) {  }

  createSala(tema: string, max_player: number, tempo: number, user: string) {
    return this.httpClient.post<MensagemDTO>(this.API_SALA + this.POST_SALA,
      {
        "user": user,
        "max_player": max_player,
        "tema": tema,
        "tempo": tempo
      }
    );
  }

  getSalas() {
    return this.httpClient.get<Sala[]>(this.API_SALA + this.POST_SALA);
  }

  getRanking() {
    return this.httpClient.get<Player[]>(this.API_SALA + this.GET_RANKING);
  }
}
