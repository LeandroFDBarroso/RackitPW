import {Entity, model, property} from '@loopback/repository';

@model()
export class Categorias extends Entity {
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


  constructor(data?: Partial<Categorias>) {
    super(data);
  }
}

export interface CategoriasRelations {
  // describe navigational properties here
}

export type CategoriasWithRelations = Categorias & CategoriasRelations;
