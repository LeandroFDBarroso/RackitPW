import {Entity, model, property} from '@loopback/repository';

@model()
export class Armazem extends Entity {
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
  })
  descricao?: string;

  @property({
    type: 'string',
  })
  imagem?: string;


  constructor(data?: Partial<Armazem>) {
    super(data);
  }
}

export interface ArmazemRelations {
  // describe navigational properties here
}

export type ArmazemWithRelations = Armazem & ArmazemRelations;
