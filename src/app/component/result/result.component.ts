import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, getAuth } from '@angular/fire/auth';
import { RespostaDTO } from '../../shared/model/dto/resposta-dto';
import { PerguntasService } from 'src/app/shared/service/perguntas.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  result?: RespostaDTO[];
  email = "";
  auth: Auth;

  constructor(private router: Router, private service: PerguntasService) {
    this.auth = getAuth();
  }

  ngOnInit(): void {
    this.email += this.auth.currentUser?.email;

    this.service.consultarRespostas(this.email).subscribe(
      response => {
        if(response) {
          this.result = response;
        }
      }, error => {
        console.log(error);
      }
    );
  }

  jogarNovamente() {
    this.router.navigate(['/jogo'])
  }

}
