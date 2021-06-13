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
import {ProdutosCategorias} from '../models';
import {ProdutosCategoriasRepository} from '../repositories';

export class ProdutoscategoriasController {
  constructor(
    @repository(ProdutosCategoriasRepository)
    public produtosCategoriasRepository : ProdutosCategoriasRepository,
  ) {}

  @post('/produtos-categorias')
  @response(200, {
    description: 'ProdutosCategorias model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProdutosCategorias)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProdutosCategorias, {
            title: 'NewProdutosCategorias',
            exclude: ['id'],
          }),
        },
      },
    })
    produtosCategorias: Omit<ProdutosCategorias, 'id'>,
  ): Promise<ProdutosCategorias> {
    return this.produtosCategoriasRepository.create(produtosCategorias);
  }

  @get('/produtos-categorias/count')
  @response(200, {
    description: 'ProdutosCategorias model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProdutosCategorias) where?: Where<ProdutosCategorias>,
  ): Promise<Count> {
    return this.produtosCategoriasRepository.count(where);
  }

  @get('/produtos-categorias')
  @response(200, {
    description: 'Array of ProdutosCategorias model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProdutosCategorias, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProdutosCategorias) filter?: Filter<ProdutosCategorias>,
  ): Promise<ProdutosCategorias[]> {
    return this.produtosCategoriasRepository.find(filter);
  }

  @patch('/produtos-categorias')
  @response(200, {
    description: 'ProdutosCategorias PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProdutosCategorias, {partial: true}),
        },
      },
    })
    produtosCategorias: ProdutosCategorias,
    @param.where(ProdutosCategorias) where?: Where<ProdutosCategorias>,
  ): Promise<Count> {
    return this.produtosCategoriasRepository.updateAll(produtosCategorias, where);
  }

  @get('/produtos-categorias/{id}')
  @response(200, {
    description: 'ProdutosCategorias model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProdutosCategorias, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProdutosCategorias, {exclude: 'where'}) filter?: FilterExcludingWhere<ProdutosCategorias>
  ): Promise<ProdutosCategorias> {
    return this.produtosCategoriasRepository.findById(id, filter);
  }

  @patch('/produtos-categorias/{id}')
  @response(204, {
    description: 'ProdutosCategorias PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProdutosCategorias, {partial: true}),
        },
      },
    })
    produtosCategorias: ProdutosCategorias,
  ): Promise<void> {
    await this.produtosCategoriasRepository.updateById(id, produtosCategorias);
  }

  @put('/produtos-categorias/{id}')
  @response(204, {
    description: 'ProdutosCategorias PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() produtosCategorias: ProdutosCategorias,
  ): Promise<void> {
    await this.produtosCategoriasRepository.replaceById(id, produtosCategorias);
  }

  @del('/produtos-categorias/{id}')
  @response(204, {
    description: 'ProdutosCategorias DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.produtosCategoriasRepository.deleteById(id);
  }
}
