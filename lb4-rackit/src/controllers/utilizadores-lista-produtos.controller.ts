import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Utilizadores,
UtilizadoresListaProdutos,
ListaProdutos,
} from '../models';
import {UtilizadoresRepository} from '../repositories';

export class UtilizadoresListaProdutosController {
  constructor(
    @repository(UtilizadoresRepository) protected utilizadoresRepository: UtilizadoresRepository,
  ) { }

  @get('/utilizadores/{id}/lista-produtos', {
    responses: {
      '200': {
        description: 'Array of Utilizadores has many ListaProdutos through UtilizadoresListaProdutos',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ListaProdutos)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ListaProdutos>,
  ): Promise<ListaProdutos[]> {
    return this.utilizadoresRepository.listaProdutos(id).find(filter);
  }

  @post('/utilizadores/{id}/lista-produtos', {
    responses: {
      '200': {
        description: 'create a ListaProdutos model instance',
        content: {'application/json': {schema: getModelSchemaRef(ListaProdutos)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Utilizadores.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaProdutos, {
            title: 'NewListaProdutosInUtilizadores',
            exclude: ['id'],
          }),
        },
      },
    }) listaProdutos: Omit<ListaProdutos, 'id'>,
  ): Promise<ListaProdutos> {
    return this.utilizadoresRepository.listaProdutos(id).create(listaProdutos);
  }

  @patch('/utilizadores/{id}/lista-produtos', {
    responses: {
      '200': {
        description: 'Utilizadores.ListaProdutos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaProdutos, {partial: true}),
        },
      },
    })
    listaProdutos: Partial<ListaProdutos>,
    @param.query.object('where', getWhereSchemaFor(ListaProdutos)) where?: Where<ListaProdutos>,
  ): Promise<Count> {
    return this.utilizadoresRepository.listaProdutos(id).patch(listaProdutos, where);
  }

  @del('/utilizadores/{id}/lista-produtos', {
    responses: {
      '200': {
        description: 'Utilizadores.ListaProdutos DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ListaProdutos)) where?: Where<ListaProdutos>,
  ): Promise<Count> {
    return this.utilizadoresRepository.listaProdutos(id).delete(where);
  }
}
