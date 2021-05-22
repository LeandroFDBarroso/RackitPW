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
  ListaProdutos,
  Produtos,
} from '../models';
import {ListaProdutosRepository} from '../repositories';

export class ListaProdutosProdutosController {
  constructor(
    @repository(ListaProdutosRepository) protected listaProdutosRepository: ListaProdutosRepository,
  ) { }

  @get('/lista-produtos/{id}/produtos', {
    responses: {
      '200': {
        description: 'Array of ListaProdutos has many Produtos',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Produtos)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Produtos>,
  ): Promise<Produtos[]> {
    return this.listaProdutosRepository.produtos(id).find(filter);
  }

  @post('/lista-produtos/{id}/produtos', {
    responses: {
      '200': {
        description: 'ListaProdutos model instance',
        content: {'application/json': {schema: getModelSchemaRef(Produtos)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof ListaProdutos.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produtos, {
            title: 'NewProdutosInListaProdutos',
            exclude: ['id'],
            optional: ['listaProdutosId']
          }),
        },
      },
    }) produtos: Omit<Produtos, 'id'>,
  ): Promise<Produtos> {
    return this.listaProdutosRepository.produtos(id).create(produtos);
  }

  @patch('/lista-produtos/{id}/produtos', {
    responses: {
      '200': {
        description: 'ListaProdutos.Produtos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Produtos, {partial: true}),
        },
      },
    })
    produtos: Partial<Produtos>,
    @param.query.object('where', getWhereSchemaFor(Produtos)) where?: Where<Produtos>,
  ): Promise<Count> {
    return this.listaProdutosRepository.produtos(id).patch(produtos, where);
  }

  @del('/lista-produtos/{id}/produtos', {
    responses: {
      '200': {
        description: 'ListaProdutos.Produtos DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Produtos)) where?: Where<Produtos>,
  ): Promise<Count> {
    return this.listaProdutosRepository.produtos(id).delete(where);
  }
}
