import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Armazem} from './armazem.model';

@model()
export class InfoProduto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
  })
  dataCompra?: string;

  @property({
    type: 'date',
  })
  dataValidade?: string;

  @property({
    type: 'number',
    required: true,
  })
  compradoPor: number;

  @property({
    type: 'number',
  })
  precoCompra?: number;

  @property({
    type: 'number',
  })
  precoNormal?: number;

  @property({
    type: 'number',
  })
  produtosId?: number;

  @belongsTo(() => Armazem)
  armazemId: number;

  constructor(data?: Partial<InfoProduto>) {
    super(data);
  }
}

export interface InfoProdutoRelations {
  // describe navigational properties here
}

export type InfoProdutoWithRelations = InfoProduto & InfoProdutoRelations;
