import { User } from '../models/users.model';
import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { UserService } from '../services';
import { ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import { CreateUserRequest } from '../requests';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  @ApiResponse({ status: 200, description: 'Users are retrieved' })
  @ApiOperation({ summary: 'Retrieve users' })
  async index(): Promise<User[]> {
    return await this.userService.index();
  }

  @Post('/')
  @ApiResponse({ status: 200, description: 'User is created successfully' })
  @ApiOperation({ summary: 'Create user' })
  @ApiBody({
    description: 'CreateUserRequest',
    type: CreateUserRequest,
    required: true,
  })
  async store(@Body() user: CreateUserRequest): Promise<User> {
    return await this.userService.create({ ...user });
  }
}
