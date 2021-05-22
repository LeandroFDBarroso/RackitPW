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
  InfoProduto,
} from '../models';
import {ProdutosRepository} from '../repositories';

export class ProdutosInfoProdutoController {
  constructor(
    @repository(ProdutosRepository) protected produtosRepository: ProdutosRepository,
  ) { }

  @get('/produtos/{id}/info-produtos', {
    responses: {
      '200': {
        description: 'Array of Produtos has many InfoProduto',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(InfoProduto)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<InfoProduto>,
  ): Promise<InfoProduto[]> {
    return this.produtosRepository.infoProdutos(id).find(filter);
  }

  @post('/produtos/{id}/info-produtos', {
    responses: {
      '200': {
        description: 'Produtos model instance',
        content: {'application/json': {schema: getModelSchemaRef(InfoProduto)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Produtos.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InfoProduto, {
            title: 'NewInfoProdutoInProdutos',
            exclude: ['id'],
            optional: ['produtosId']
          }),
        },
      },
    }) infoProduto: Omit<InfoProduto, 'id'>,
  ): Promise<InfoProduto> {
    return this.produtosRepository.infoProdutos(id).create(infoProduto);
  }

  @patch('/produtos/{id}/info-produtos', {
    responses: {
      '200': {
        description: 'Produtos.InfoProduto PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InfoProduto, {partial: true}),
        },
      },
    })
    infoProduto: Partial<InfoProduto>,
    @param.query.object('where', getWhereSchemaFor(InfoProduto)) where?: Where<InfoProduto>,
  ): Promise<Count> {
    return this.produtosRepository.infoProdutos(id).patch(infoProduto, where);
  }

  @del('/produtos/{id}/info-produtos', {
    responses: {
      '200': {
        description: 'Produtos.InfoProduto DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(InfoProduto)) where?: Where<InfoProduto>,
  ): Promise<Count> {
    return this.produtosRepository.infoProdutos(id).delete(where);
  }
}
