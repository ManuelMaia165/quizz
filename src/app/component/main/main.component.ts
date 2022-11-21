import { Router } from '@angular/router';
import { AuthService } from './../../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../shared/service/feedback.service';
import { Comentario } from '../../shared/model/comentario';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mensagem = "";
  comentarios: Comentario[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private comentarioService: FeedbackService
  ) {  }

  ngOnInit(): void {
    this.comentarioService.get_comentarios().subscribe(
      response => {
        if(response) {
          this.comentarios = response;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  onClick() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => alert(error));
  }

  onJogar(){
    this.router.navigate(['/jogo']);
  }

  onCriarSala() {
    this.router.navigate(['/criarSala'])
  }

  sendComentario() {
    this.comentarioService.post_comentario(this.mensagem).subscribe(
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
    this.comentarioService.put_comentario_like_or_deslike(id, like, deslike).subscribe();

    window.location.reload();
  }

}
