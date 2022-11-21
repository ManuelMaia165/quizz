export interface Comentario {
  id            : number;
  mensagem      : string;
  like          : number;
  deslike       : number;
  comentario_id : number;
  created_at    : Date;
  updated_at    : Date;
}
