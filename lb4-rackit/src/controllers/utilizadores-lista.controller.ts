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
import {UtilizadoresListaProdutos} from '../models';
import {UtilizadoresListaProdutosRepository} from '../repositories';

export class UtilizadoresListaController {
  constructor(
    @repository(UtilizadoresListaProdutosRepository)
    public utilizadoresListaProdutosRepository : UtilizadoresListaProdutosRepository,
  ) {}

  @post('/utilizadores-lista-produtos')
  @response(200, {
    description: 'UtilizadoresListaProdutos model instance',
    content: {'application/json': {schema: getModelSchemaRef(UtilizadoresListaProdutos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UtilizadoresListaProdutos, {
            title: 'NewUtilizadoresListaProdutos',
            exclude: ['id'],
          }),
        },
      },
    })
    utilizadoresListaProdutos: Omit<UtilizadoresListaProdutos, 'id'>,
  ): Promise<UtilizadoresListaProdutos> {
    return this.utilizadoresListaProdutosRepository.create(utilizadoresListaProdutos);
  }

  @get('/utilizadores-lista-produtos/count')
  @response(200, {
    description: 'UtilizadoresListaProdutos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UtilizadoresListaProdutos) where?: Where<UtilizadoresListaProdutos>,
  ): Promise<Count> {
    return this.utilizadoresListaProdutosRepository.count(where);
  }

  @get('/utilizadores-lista-produtos')
  @response(200, {
    description: 'Array of UtilizadoresListaProdutos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UtilizadoresListaProdutos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UtilizadoresListaProdutos) filter?: Filter<UtilizadoresListaProdutos>,
  ): Promise<UtilizadoresListaProdutos[]> {
    return this.utilizadoresListaProdutosRepository.find(filter);
  }

  @patch('/utilizadores-lista-produtos')
  @response(200, {
    description: 'UtilizadoresListaProdutos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UtilizadoresListaProdutos, {partial: true}),
        },
      },
    })
    utilizadoresListaProdutos: UtilizadoresListaProdutos,
    @param.where(UtilizadoresListaProdutos) where?: Where<UtilizadoresListaProdutos>,
  ): Promise<Count> {
    return this.utilizadoresListaProdutosRepository.updateAll(utilizadoresListaProdutos, where);
  }

  @get('/utilizadores-lista-produtos/{id}')
  @response(200, {
    description: 'UtilizadoresListaProdutos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UtilizadoresListaProdutos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UtilizadoresListaProdutos, {exclude: 'where'}) filter?: FilterExcludingWhere<UtilizadoresListaProdutos>
  ): Promise<UtilizadoresListaProdutos> {
    return this.utilizadoresListaProdutosRepository.findById(id, filter);
  }

  @patch('/utilizadores-lista-produtos/{id}')
  @response(204, {
    description: 'UtilizadoresListaProdutos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UtilizadoresListaProdutos, {partial: true}),
        },
      },
    })
    utilizadoresListaProdutos: UtilizadoresListaProdutos,
  ): Promise<void> {
    await this.utilizadoresListaProdutosRepository.updateById(id, utilizadoresListaProdutos);
  }

  @put('/utilizadores-lista-produtos/{id}')
  @response(204, {
    description: 'UtilizadoresListaProdutos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() utilizadoresListaProdutos: UtilizadoresListaProdutos,
  ): Promise<void> {
    await this.utilizadoresListaProdutosRepository.replaceById(id, utilizadoresListaProdutos);
  }

  @del('/utilizadores-lista-produtos/{id}')
  @response(204, {
    description: 'UtilizadoresListaProdutos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.utilizadoresListaProdutosRepository.deleteById(id);
  }
}
