import { Hobbie } from '../models/hobbies.model';
import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { HobbieService } from '../services';
import { ApiResponse, ApiOperation, ApiBody, ApiParam } from '@nestjs/swagger';
import { CreateHobbieRequest } from '../requests';

@Controller('/api/hobbies')
export class HobbieController {
  constructor(private readonly HobbieService: HobbieService) {}

  @Get('/:id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'user id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  @ApiResponse({ status: 200, description: 'Hobbies are retrieved' })
  @ApiOperation({ summary: 'Retrieve Hobbies by users' })
  async index(@Req() req, @Param() { id }): Promise<Hobbie[]> {
    return await this.HobbieService.findByUserId(id);
  }

  @Post('/')
  @ApiResponse({ status: 200, description: 'Hobbie is created successfully' })
  @ApiOperation({ summary: 'Create Hobbie' })
  @ApiBody({
    description: 'CreateHobbieRequest',
    type: CreateHobbieRequest,
    required: true,
  })
  async store(
    @Req() req,
    @Body() hobbie: CreateHobbieRequest,
  ): Promise<Hobbie> {
    const user = req.body.user;
    return await this.HobbieService.create({ ...hobbie, user });
  }

  @Delete('/:id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Hobbie id',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  @ApiResponse({ status: 200, description: 'Hobbie is deleted successfully' })
  @ApiOperation({ summary: 'Hobbie deleted' })
  async destroy(@Req() req, @Param() { id }): Promise<null> {
    await this.HobbieService.delete(id);
    return null;
  }
}
