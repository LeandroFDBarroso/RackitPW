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
import {Utilizadores} from '../models';
import {UtilizadoresRepository} from '../repositories';

export class UtilizadoresController {
  constructor(
    @repository(UtilizadoresRepository)
    public utilizadoresRepository : UtilizadoresRepository,
  ) {}

  @post('/utilizadores')
  @response(200, {
    description: 'Utilizadores model instance',
    content: {'application/json': {schema: getModelSchemaRef(Utilizadores)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilizadores, {
            title: 'NewUtilizadores',
            exclude: ['id'],
          }),
        },
      },
    })
    utilizadores: Omit<Utilizadores, 'id'>,
  ): Promise<Utilizadores> {
    return this.utilizadoresRepository.create(utilizadores);
  }

  @get('/utilizadores/count')
  @response(200, {
    description: 'Utilizadores model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Utilizadores) where?: Where<Utilizadores>,
  ): Promise<Count> {
    return this.utilizadoresRepository.count(where);
  }

  @get('/utilizadores')
  @response(200, {
    description: 'Array of Utilizadores model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Utilizadores, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Utilizadores) filter?: Filter<Utilizadores>,
  ): Promise<Utilizadores[]> {
    return this.utilizadoresRepository.find(filter);
  }

  @patch('/utilizadores')
  @response(200, {
    description: 'Utilizadores PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilizadores, {partial: true}),
        },
      },
    })
    utilizadores: Utilizadores,
    @param.where(Utilizadores) where?: Where<Utilizadores>,
  ): Promise<Count> {
    return this.utilizadoresRepository.updateAll(utilizadores, where);
  }

  @get('/utilizadores/{id}')
  @response(200, {
    description: 'Utilizadores model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Utilizadores, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Utilizadores, {exclude: 'where'}) filter?: FilterExcludingWhere<Utilizadores>
  ): Promise<Utilizadores> {
    return this.utilizadoresRepository.findById(id, filter);
  }

  @patch('/utilizadores/{id}')
  @response(204, {
    description: 'Utilizadores PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilizadores, {partial: true}),
        },
      },
    })
    utilizadores: Utilizadores,
  ): Promise<void> {
    await this.utilizadoresRepository.updateById(id, utilizadores);
  }

  @put('/utilizadores/{id}')
  @response(204, {
    description: 'Utilizadores PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() utilizadores: Utilizadores,
  ): Promise<void> {
    await this.utilizadoresRepository.replaceById(id, utilizadores);
  }

  @del('/utilizadores/{id}')
  @response(204, {
    description: 'Utilizadores DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.utilizadoresRepository.deleteById(id);
  }
}
