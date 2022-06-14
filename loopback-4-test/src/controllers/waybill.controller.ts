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
import {Waybill} from '../models';
import {WaybillRepository} from '../repositories';

export class WaybillController {
  constructor(
    @repository(WaybillRepository)
    public waybillRepository : WaybillRepository,
  ) {}

  @get('/waybills')
  @response(200, {
    description: 'Array of Waybill model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Waybill, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Waybill) filter?: Filter<Waybill>,
  ): Promise<Waybill[]> {
    return this.waybillRepository.find(filter);
  }

  @get('/waybills/{id}')
  @response(200, {
    description: 'Waybill model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Waybill, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Waybill, {exclude: 'where'}) filter?: FilterExcludingWhere<Waybill>
  ): Promise<Waybill> {
    return this.waybillRepository.findById(id, filter);
  }

  @post('/waybills')
  @response(200, {
    description: 'Waybill model instance',
    content: {'application/json': {schema: getModelSchemaRef(Waybill)}},
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

  // @patch('/waybills/{id}')
  // @response(204, {
  //   description: 'Waybill PATCH success',
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Waybill, {partial: true}),
  //       },
  //     },
  //   })
  //   waybill: Waybill,
  // ): Promise<void> {
  //   await this.waybillRepository.updateById(id, waybill);
  // }


  // @get('/waybills/count')
  // @response(200, {
  //   description: 'Waybill model count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async count(
  //   @param.where(Waybill) where?: Where<Waybill>,
  // ): Promise<Count> {
  //   return this.waybillRepository.count(where);
  // }

  // @patch('/waybills')
  // @response(200, {
  //   description: 'Waybill PATCH success count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Waybill, {partial: true}),
  //       },
  //     },
  //   })
  //   waybill: Waybill,
  //   @param.where(Waybill) where?: Where<Waybill>,
  // ): Promise<Count> {
  //   return this.waybillRepository.updateAll(waybill, where);
  // }
