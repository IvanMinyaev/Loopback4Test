import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Waybill extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'number',
    required: true,
  })
  shipId: number;

  @property({
    type: 'string',
  })
  departurePlace?: string;

  @property({
    type: 'number',
  })
  crew?: number;

  @property({
    type: 'number',
  })
  passangers?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Waybill>) {
    super(data);
  }
}

export interface WaybillRelations {
  // describe navigational properties here
}

export type WaybillWithRelations = Waybill & WaybillRelations;
