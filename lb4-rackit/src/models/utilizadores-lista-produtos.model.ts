import {Entity, model, property} from '@loopback/repository';

@model()
export class UtilizadoresListaProdutos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  utilizadoresId?: number;

  @property({
    type: 'number',
  })
  listaProdutosId?: number;

  constructor(data?: Partial<UtilizadoresListaProdutos>) {
    super(data);
  }
}

export interface UtilizadoresListaProdutosRelations {
  // describe navigational properties here
}

export type UtilizadoresListaProdutosWithRelations = UtilizadoresListaProdutos & UtilizadoresListaProdutosRelations;
