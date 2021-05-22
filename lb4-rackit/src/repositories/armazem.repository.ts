import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Armazem, ArmazemRelations} from '../models';

export class ArmazemRepository extends DefaultCrudRepository<
  Armazem,
  typeof Armazem.prototype.id,
  ArmazemRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Armazem, dataSource);
  }
}
