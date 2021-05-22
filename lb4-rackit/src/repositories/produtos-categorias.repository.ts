import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ProdutosCategorias, ProdutosCategoriasRelations} from '../models';

export class ProdutosCategoriasRepository extends DefaultCrudRepository<
  ProdutosCategorias,
  typeof ProdutosCategorias.prototype.id,
  ProdutosCategoriasRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(ProdutosCategorias, dataSource);
  }
}
