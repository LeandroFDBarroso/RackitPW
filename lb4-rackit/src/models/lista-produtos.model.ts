import {Entity, model, property, hasMany} from '@loopback/repository';
import {Produtos} from './produtos.model';

@model()
export class ListaProdutos extends Entity {
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

  @hasMany(() => Produtos)
  produtos: Produtos[];

  constructor(data?: Partial<ListaProdutos>) {
    super(data);
  }
}

export interface ListaProdutosRelations {
  // describe navigational properties here
}

export type ListaProdutosWithRelations = ListaProdutos & ListaProdutosRelations;
