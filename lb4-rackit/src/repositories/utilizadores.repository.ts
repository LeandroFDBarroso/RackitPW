import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Utilizadores, UtilizadoresRelations, ListaProdutos, UtilizadoresListaProdutos} from '../models';
import {UtilizadoresListaProdutosRepository} from './utilizadores-lista-produtos.repository';
import {ListaProdutosRepository} from './lista-produtos.repository';

export class UtilizadoresRepository extends DefaultCrudRepository<
  Utilizadores,
  typeof Utilizadores.prototype.id,
  UtilizadoresRelations
> {

  public readonly listaProdutos: HasManyThroughRepositoryFactory<ListaProdutos, typeof ListaProdutos.prototype.id,
          UtilizadoresListaProdutos,
          typeof Utilizadores.prototype.id
        >;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UtilizadoresListaProdutosRepository') protected utilizadoresListaProdutosRepositoryGetter: Getter<UtilizadoresListaProdutosRepository>, @repository.getter('ListaProdutosRepository') protected listaProdutosRepositoryGetter: Getter<ListaProdutosRepository>,
  ) {
    super(Utilizadores, dataSource);
    this.listaProdutos = this.createHasManyThroughRepositoryFactoryFor('listaProdutos', listaProdutosRepositoryGetter, utilizadoresListaProdutosRepositoryGetter,);
    this.registerInclusionResolver('listaProdutos', this.listaProdutos.inclusionResolver);
  }
}
