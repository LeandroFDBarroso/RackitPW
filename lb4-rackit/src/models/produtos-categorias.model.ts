import {Entity, model, property} from '@loopback/repository';

@model()
export class ProdutosCategorias extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  produtosId?: number;

  @property({
    type: 'number',
  })
  categoriasId?: number;

  constructor(data?: Partial<ProdutosCategorias>) {
    super(data);
  }
}

export interface ProdutosCategoriasRelations {
  // describe navigational properties here
}

export type ProdutosCategoriasWithRelations = ProdutosCategorias & ProdutosCategoriasRelations;
