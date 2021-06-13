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
import {Armazem} from '../models';
import {ArmazemRepository} from '../repositories';

export class ArmazemControllerController {
  constructor(
    @repository(ArmazemRepository)
    public armazemRepository : ArmazemRepository,
  ) {}

  @post('/armazems')
  @response(200, {
    description: 'Armazem model instance',
    content: {'application/json': {schema: getModelSchemaRef(Armazem)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Armazem, {
            title: 'NewArmazem',
            exclude: ['id'],
          }),
        },
      },
    })
    armazem: Omit<Armazem, 'id'>,
  ): Promise<Armazem> {
    return this.armazemRepository.create(armazem);
  }

  @get('/armazems/count')
  @response(200, {
    description: 'Armazem model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Armazem) where?: Where<Armazem>,
  ): Promise<Count> {
    return this.armazemRepository.count(where);
  }

  @get('/armazems')
  @response(200, {
    description: 'Array of Armazem model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Armazem, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Armazem) filter?: Filter<Armazem>,
  ): Promise<Armazem[]> {
    return this.armazemRepository.find(filter);
  }

  @patch('/armazems')
  @response(200, {
    description: 'Armazem PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Armazem, {partial: true}),
        },
      },
    })
    armazem: Armazem,
    @param.where(Armazem) where?: Where<Armazem>,
  ): Promise<Count> {
    return this.armazemRepository.updateAll(armazem, where);
  }

  @get('/armazems/{id}')
  @response(200, {
    description: 'Armazem model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Armazem, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Armazem, {exclude: 'where'}) filter?: FilterExcludingWhere<Armazem>
  ): Promise<Armazem> {
    return this.armazemRepository.findById(id, filter);
  }

  @patch('/armazems/{id}')
  @response(204, {
    description: 'Armazem PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Armazem, {partial: true}),
        },
      },
    })
    armazem: Armazem,
  ): Promise<void> {
    await this.armazemRepository.updateById(id, armazem);
  }

  @put('/armazems/{id}')
  @response(204, {
    description: 'Armazem PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() armazem: Armazem,
  ): Promise<void> {
    await this.armazemRepository.replaceById(id, armazem);
  }

  @del('/armazems/{id}')
  @response(204, {
    description: 'Armazem DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.armazemRepository.deleteById(id);
  }
}
