import { compareByOrder, filterByKey } from '@loopback/core';
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
import { Waybill } from '../models';
import { WaybillRepository } from '../repositories';

export class WaybillController {
  constructor(
    @repository(WaybillRepository)
    public waybillRepository: WaybillRepository,
  ) { }

  @get('/waybills')
  @response(200, {
    description: 'Array of Waybill model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Waybill, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Waybill) filter?: Filter<Waybill>,
  ): Promise<Record<string, Waybill>> {
    const waybillsList = await this.waybillRepository.find({ order: ['id DESC'] });

    const formattedList = waybillsList.reduce<Record<string, Waybill>>((acc: { [x: string]: any; }, el: { id: string | number; }) => {
      acc[`_${el.id}_`] = el;
      return acc;
    }, {});

    return formattedList;
  }

  @get('/waybills/{id}')
  @response(200, {
    description: 'Waybill model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Waybill, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Waybill, { exclude: 'where' }) filter?: FilterExcludingWhere<Waybill>
  ): Promise<Waybill> {
    return this.waybillRepository.findById(id, filter);
  }

  @post('/waybills')
  @response(200, {
    description: 'Waybill model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Waybill) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Waybill, {
            title: 'NewWaybill',

          }),
        },
      },
    })
    waybill: Waybill,
  ): Promise<Waybill> {
    return this.waybillRepository.create(waybill);
  }

  @put('/waybills/{id}')
  @response(204, {
    description: 'Waybill PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() waybill: Waybill,
  ): Promise<void> {
    await this.waybillRepository.replaceById(id, waybill);
  }

  @del('/waybills/{id}')
  @response(204, {
    description: 'Waybill DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.waybillRepository.deleteById(id);
  }
}
