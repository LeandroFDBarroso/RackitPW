import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ListaProdutos} from '../models';
import {ListaProdutosRepository} from '../repositories';

export class ListaProdutosController {
  constructor(
    @repository(ListaProdutosRepository)
    public listaProdutosRepository : ListaProdutosRepository,
  ) {}

  @post('/lista-produtos')
  @response(200, {
    description: 'ListaProdutos model instance',
    content: {'application/json': {schema: getModelSchemaRef(ListaProdutos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaProdutos, {
            title: 'NewListaProdutos',
            exclude: ['id'],
          }),
        },
      },
    })
    listaProdutos: Omit<ListaProdutos, 'id'>,
  ): Promise<ListaProdutos> {
    return this.listaProdutosRepository.create(listaProdutos);
  }

  @get('/lista-produtos/count')
  @response(200, {
    description: 'ListaProdutos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ListaProdutos) where?: Where<ListaProdutos>,
  ): Promise<Count> {
    return this.listaProdutosRepository.count(where);
  }

  @get('/lista-produtos')
  @response(200, {
    description: 'Array of ListaProdutos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ListaProdutos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ListaProdutos) filter?: Filter<ListaProdutos>,
  ): Promise<ListaProdutos[]> {
    return this.listaProdutosRepository.find(filter);
  }

  @patch('/lista-produtos')
  @response(200, {
    description: 'ListaProdutos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaProdutos, {partial: true}),
        },
      },
    })
    listaProdutos: ListaProdutos,
    @param.where(ListaProdutos) where?: Where<ListaProdutos>,
  ): Promise<Count> {
    return this.listaProdutosRepository.updateAll(listaProdutos, where);
  }

  @get('/lista-produtos/{id}')
  @response(200, {
    description: 'ListaProdutos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ListaProdutos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ListaProdutos, {exclude: 'where'}) filter?: FilterExcludingWhere<ListaProdutos>
  ): Promise<ListaProdutos> {
    return this.listaProdutosRepository.findById(id, filter);
  }

  @patch('/lista-produtos/{id}')
  @response(204, {
    description: 'ListaProdutos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ListaProdutos, {partial: true}),
        },
      },
    })
    listaProdutos: ListaProdutos,
  ): Promise<void> {
    await this.listaProdutosRepository.updateById(id, listaProdutos);
  }

  @put('/lista-produtos/{id}')
  @response(204, {
    description: 'ListaProdutos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() listaProdutos: ListaProdutos,
  ): Promise<void> {
    await this.listaProdutosRepository.replaceById(id, listaProdutos);
  }

  @del('/lista-produtos/{id}')
  @response(204, {
    description: 'ListaProdutos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.listaProdutosRepository.deleteById(id);
  }
}
