import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {InfoProduto, InfoProdutoRelations, Armazem} from '../models';
import {ArmazemRepository} from './armazem.repository';

export class InfoProdutoRepository extends DefaultCrudRepository<
  InfoProduto,
  typeof InfoProduto.prototype.id,
  InfoProdutoRelations
> {

  public readonly armazem: BelongsToAccessor<Armazem, typeof InfoProduto.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ArmazemRepository') protected armazemRepositoryGetter: Getter<ArmazemRepository>,
  ) {
    super(InfoProduto, dataSource);
    this.armazem = this.createBelongsToAccessorFor('armazem', armazemRepositoryGetter,);
    this.registerInclusionResolver('armazem', this.armazem.inclusionResolver);
  }
}
