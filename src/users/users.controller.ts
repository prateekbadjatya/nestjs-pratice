import { request } from 'express';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Headers,
  Ip,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserParamsDto } from './dto/get-users-params.dto';
import { PatchUserDto } from './dto/patch-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // required: '/:id'
  // optional: '/:id?'

  // defining ooptional change in next js 11
  //https://www.npmjs.com/package/path-to-regexp
  // @Get('{/:id}') --optional



   @Get('{/:id}')
  getUsers(
    @Param()
    getUserParamsDto: GetUserParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('offset',new DefaultValuePipe(1), ParseIntPipe) offset: number,
  ): string {
    return this.usersService.getUsers(getUserParamsDto.id);
  }

  // @Get('{/:id}')
  // getUsers(
  //   @Param(
  //     'id',
  //     new ParseIntPipe({
  //       optional: true,
  //     }),
  //   )
  //   id: number | undefined,
  //   @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  //   @Query('offset',new DefaultValuePipe(1), ParseIntPipe) offset: number,
  // ): string {
  //   return this.usersService.getUsers(id);
  // }

  // grab only id from params
  //liit from query
  // @Get('/:id')
  // getUsers(@Param('id') id: any, @Query('limit') limit: any): string {
  //   console.log('params', id);
  //   console.log('queery', limit);
  //   return this.usersService.getUsers(id);
  // }

  // //grab only email
  // @Post()
  // createUsers(@Body('email') email: string) {
  //   return {
  //     email,
  //     succeed: true,
  //   };
  // }


  // https://www.npmjs.com/package/class-transformer
  //  //https://www.npmjs.com/package/class-validator
  // install this for DTO

  //added new validation pipe globally
  //new ValidationPipe()
  @Post()
  createUsers(@Body() request: CreateUserDto, @Headers() headers: any, @Ip() ip: any) {
    console.log('ip', ip); //give ip address of sender
    return {
      ...request,
      succeed: true,
    };
  }

  // @Post()
  // createUsers(@Req() request: Request) {
  //   return {
  //     ...request.body,
  //     succeed: true,
  //   };
  // }



  //------------------------------------

  @Patch()
  updateUsers(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto
  }
}
