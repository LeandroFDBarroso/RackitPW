import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {UtilizadoresListaProdutos, UtilizadoresListaProdutosRelations} from '../models';

export class UtilizadoresListaProdutosRepository extends DefaultCrudRepository<
  UtilizadoresListaProdutos,
  typeof UtilizadoresListaProdutos.prototype.id,
  UtilizadoresListaProdutosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(UtilizadoresListaProdutos, dataSource);
  }
}
