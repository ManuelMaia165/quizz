import { Resposta } from './resposta';

export interface Pergunta {
  id        : number;
  descricao : string;
  tema      : string;
  resposta  : Resposta;
}
