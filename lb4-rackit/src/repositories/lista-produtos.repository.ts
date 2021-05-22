import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ListaProdutos, ListaProdutosRelations, Produtos} from '../models';
import {ProdutosRepository} from './produtos.repository';

export class ListaProdutosRepository extends DefaultCrudRepository<
  ListaProdutos,
  typeof ListaProdutos.prototype.id,
  ListaProdutosRelations
> {

  public readonly produtos: HasManyRepositoryFactory<Produtos, typeof ListaProdutos.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ProdutosRepository') protected produtosRepositoryGetter: Getter<ProdutosRepository>,
  ) {
    super(ListaProdutos, dataSource);
    this.produtos = this.createHasManyRepositoryFactoryFor('produtos', produtosRepositoryGetter,);
    this.registerInclusionResolver('produtos', this.produtos.inclusionResolver);
  }
}
