import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Waybill, WaybillRelations} from '../models';

export class WaybillRepository extends DefaultCrudRepository<
  Waybill,
  typeof Waybill.prototype.id,
  WaybillRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Waybill, dataSource);
  }
}
