import { Pergunta } from './pergunta';
import { Resposta } from './resposta';

export interface Questao {
  pergunta  : Pergunta;
  respostas : Resposta[];
}
