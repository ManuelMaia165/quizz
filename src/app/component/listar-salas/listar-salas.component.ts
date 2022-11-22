import { Component, OnInit } from '@angular/core';
import { SalaService } from '../../shared/service/sala.service';
import { Sala } from '../../shared/model/sala';

@Component({
  selector: 'app-listar-salas',
  templateUrl: './listar-salas.component.html',
  styleUrls: ['./listar-salas.component.scss']
})
export class ListarSalasComponent implements OnInit {

  salas?: Sala[];
  displayedColumns: string[] = ['ID', 'Criado por', 'Tema', 'Máx. Players', 'Tempo']

  constructor(private apiSala: SalaService) { }

  ngOnInit(): void {
    this.apiSala.getSalas().subscribe(
      response => {
        if(response) {
          this.salas = response;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
