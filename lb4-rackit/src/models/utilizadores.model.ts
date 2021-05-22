import {Entity, model, property, hasMany} from '@loopback/repository';
import {ListaProdutos} from './lista-produtos.model';
import {UtilizadoresListaProdutos} from './utilizadores-lista-produtos.model';

@model()
export class Utilizadores extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isPremium?: boolean;

  @hasMany(() => ListaProdutos, {through: {model: () => UtilizadoresListaProdutos}})
  listaProdutos: ListaProdutos[];

  constructor(data?: Partial<Utilizadores>) {
    super(data);
  }
}

export interface UtilizadoresRelations {
  // describe navigational properties here
}

export type UtilizadoresWithRelations = Utilizadores & UtilizadoresRelations;
