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
Produtos,
ProdutosCategorias,
Categorias,
} from '../models';
import {ProdutosRepository} from '../repositories';

export class ProdutosCategoriasController {
  constructor(
    @repository(ProdutosRepository) protected produtosRepository: ProdutosRepository,
  ) { }

  @get('/produtos/{id}/categorias', {
    responses: {
      '200': {
        description: 'Array of Produtos has many Categorias through ProdutosCategorias',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Categorias)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Categorias>,
  ): Promise<Categorias[]> {
    return this.produtosRepository.categorias(id).find(filter);
  }

  @post('/produtos/{id}/categorias', {
    responses: {
      '200': {
        description: 'create a Categorias model instance',
        content: {'application/json': {schema: getModelSchemaRef(Categorias)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Produtos.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categorias, {
            title: 'NewCategoriasInProdutos',
            exclude: ['id'],
          }),
        },
      },
    }) categorias: Omit<Categorias, 'id'>,
  ): Promise<Categorias> {
    return this.produtosRepository.categorias(id).create(categorias);
  }

  @patch('/produtos/{id}/categorias', {
    responses: {
      '200': {
        description: 'Produtos.Categorias PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Categorias, {partial: true}),
        },
      },
    })
    categorias: Partial<Categorias>,
    @param.query.object('where', getWhereSchemaFor(Categorias)) where?: Where<Categorias>,
  ): Promise<Count> {
    return this.produtosRepository.categorias(id).patch(categorias, where);
  }

  @del('/produtos/{id}/categorias', {
    responses: {
      '200': {
        description: 'Produtos.Categorias DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Categorias)) where?: Where<Categorias>,
  ): Promise<Count> {
    return this.produtosRepository.categorias(id).delete(where);
  }
}
