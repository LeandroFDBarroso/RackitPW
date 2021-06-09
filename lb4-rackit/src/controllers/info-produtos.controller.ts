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
import {InfoProduto} from '../models';
import {InfoProdutoRepository} from '../repositories';

export class InfoProdutosController {
  constructor(
    @repository(InfoProdutoRepository)
    public infoProdutoRepository : InfoProdutoRepository,
  ) {}

  @post('/info-produtos')
  @response(200, {
    description: 'InfoProduto model instance',
    content: {'application/json': {schema: getModelSchemaRef(InfoProduto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InfoProduto, {
            title: 'NewInfoProduto',
            exclude: ['id'],
          }),
        },
      },
    })
    infoProduto: Omit<InfoProduto, 'id'>,
  ): Promise<InfoProduto> {
    return this.infoProdutoRepository.create(infoProduto);
  }

  @get('/info-produtos/count')
  @response(200, {
    description: 'InfoProduto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InfoProduto) where?: Where<InfoProduto>,
  ): Promise<Count> {
    return this.infoProdutoRepository.count(where);
  }

  @get('/info-produtos')
  @response(200, {
    description: 'Array of InfoProduto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InfoProduto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InfoProduto) filter?: Filter<InfoProduto>,
  ): Promise<InfoProduto[]> {
    return this.infoProdutoRepository.find(filter);
  }

  @patch('/info-produtos')
  @response(200, {
    description: 'InfoProduto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InfoProduto, {partial: true}),
        },
      },
    })
    infoProduto: InfoProduto,
    @param.where(InfoProduto) where?: Where<InfoProduto>,
  ): Promise<Count> {
    return this.infoProdutoRepository.updateAll(infoProduto, where);
  }

  @get('/info-produtos/{id}')
  @response(200, {
    description: 'InfoProduto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InfoProduto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(InfoProduto, {exclude: 'where'}) filter?: FilterExcludingWhere<InfoProduto>
  ): Promise<InfoProduto> {
    return this.infoProdutoRepository.findById(id, filter);
  }

  @patch('/info-produtos/{id}')
  @response(204, {
    description: 'InfoProduto PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InfoProduto, {partial: true}),
        },
      },
    })
    infoProduto: InfoProduto,
  ): Promise<void> {
    await this.infoProdutoRepository.updateById(id, infoProduto);
  }

  @put('/info-produtos/{id}')
  @response(204, {
    description: 'InfoProduto PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() infoProduto: InfoProduto,
  ): Promise<void> {
    await this.infoProdutoRepository.replaceById(id, infoProduto);
  }

  @del('/info-produtos/{id}')
  @response(204, {
    description: 'InfoProduto DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.infoProdutoRepository.deleteById(id);
  }
}
