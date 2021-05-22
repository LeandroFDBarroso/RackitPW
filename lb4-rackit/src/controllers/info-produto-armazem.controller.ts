import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  InfoProduto,
  Armazem,
} from '../models';
import {InfoProdutoRepository} from '../repositories';

export class InfoProdutoArmazemController {
  constructor(
    @repository(InfoProdutoRepository)
    public infoProdutoRepository: InfoProdutoRepository,
  ) { }

  @get('/info-produtos/{id}/armazem', {
    responses: {
      '200': {
        description: 'Armazem belonging to InfoProduto',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Armazem)},
          },
        },
      },
    },
  })
  async getArmazem(
    @param.path.number('id') id: typeof InfoProduto.prototype.id,
  ): Promise<Armazem> {
    return this.infoProdutoRepository.armazem(id);
  }
}
