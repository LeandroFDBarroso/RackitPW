import {Entity, model, property, hasMany} from '@loopback/repository';
import {Categorias} from './categorias.model';
import {ProdutosCategorias} from './produtos-categorias.model';
import {InfoProduto} from './info-produto.model';

@model()
export class Produtos extends Entity {
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
    type: 'number',
  })
  listaProdutosId?: number;

  @hasMany(() => Categorias, {through: {model: () => ProdutosCategorias}})
  categorias: Categorias[];

  @hasMany(() => InfoProduto)
  infoProdutos: InfoProduto[];

  constructor(data?: Partial<Produtos>) {
    super(data);
  }
}

export interface ProdutosRelations {
  // describe navigational properties here
}

export type ProdutosWithRelations = Produtos & ProdutosRelations;
