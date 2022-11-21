import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { PerguntasService } from '../../shared/service/perguntas.service';
import { Perfil } from '../../shared/model/perfil';
import { FeedbackService } from '../../shared/service/feedback.service';
import { Comentario } from '../../shared/model/comentario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  auth: Auth;
  email       = "";
  perfilExist = false;

  apelido     = "";
  bio         = "";

  perfil?: Perfil[];
  comentarios?: Comentario[];

  constructor(private apiPergunta: PerguntasService, private apiComentario: FeedbackService) {

    this.auth = getAuth();

    this.email += this.auth.currentUser?.email;

    this.apiPergunta.perfilExiste(this.email).subscribe(
      response => {
        this.perfilExist = response;
      },
      error => {
        console.log(error);
      }
    );

    this.apiPergunta.buscarPerfil(this.email).subscribe(
      response => {
        if(response) {
          this.perfil = response;
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  ngOnInit(): void {  }

  criarPerfil() {

    this.apiPergunta.criarPerfil(this.apelido, this.bio, this.email).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    window.location.reload();

  }

  likeDeslikeComentario(id: number, like: number, deslike: number) {
    this.apiComentario.put_comentario_like_or_deslike(id, like, deslike).subscribe();

    window.location.reload();
  }

}
