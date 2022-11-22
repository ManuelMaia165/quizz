import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/model/player';
import { SalaService } from '../../shared/service/sala.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  topPlayers?: Player[];
  displayedColumns: string[] = ['Usuário', 'Pontuação'];

  constructor(private apiSala: SalaService) {  }

  ngOnInit(): void {
    this.apiSala.getRanking().subscribe(
      response => {
        if(response) {
          this.topPlayers = response;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
