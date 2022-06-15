import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: true } })
export class Waybill extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'Date',
  })
  createdDate: Date;

  @property({
    type: 'number',
  })
  incomingNumber: number;

  @property({
    type: 'number',
  })
  outgoingNumber: number;

  @property({
    type: 'string',
  })
  applicantStatus: string;

  @property({
    type: 'number',
  })
  applicantId: number;

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
    type: 'string',
  })
  destinationPlace: string; 

  @property({
    type: 'number',
  })
  crew?: number;

  @property({
    type: 'number',
  })
  passengers?: number;

  @property({
    type: 'number',
  })
  weight?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // [prop: string]: any;

  constructor(data?: Partial<Waybill>) {
    super(data);
  }
}

export interface WaybillRelations {
  // describe navigational properties here
}

export type WaybillWithRelations = Waybill & WaybillRelations;

// {
//   "1": {
//     "id": 1,
//     "createDate": "2022-05-26T09:21:25.391Z",
//     "reviewPeriod": null,
//     "incomingNumber": "100-90",
//     "outgoingNumber": "2-х",
//     "applicantStatus": 0,
//     "applicantId": 3,
//     "shipId": 1,
//     "departurePlace": "Мурманск",
//     "departureLon": 30,
//     "departureLat": 33,
//     "destinationPlace": "Сабетта-1",
//     "destinationLon": 73,
//     "destinationLat": 73,
//     "routeDescription": "через КВ",
//     "etaNsr": "2022-04-20T00:00:00.000Z",
//     "etdNsr": "2022-05-20T00:00:00.000Z",
//     "crew": 10,
//     "passangers": 0,
//     "shipOwnerName": null,
//     "towedObject": "-",
//     "cargoTypeId": null,
//     "hazardClassId": null,
//     "weight": null,
//     "weightDangerous": null,
//     "shipName": "ARKTIKA",
//     "imo": "9694725",
//     "registerNumber": "130238",
//     "applicantName": "Совкомфлот",
//     "statusName": "Новое",
//     "statusNameEn": "New",
//     "sendDate": "2022-04-10T00:00:00.000Z",
//     "userId": 1,
//     "isCurrentUserOwner": 1,
//     "acceptDate": null,
//     "endDate": null,
//     "rejectDate": null
//   },
