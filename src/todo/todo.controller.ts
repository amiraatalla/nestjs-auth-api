import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import { CreateTodoDto } from './dto/create-todo.dto';
  import { UpdateTodoDto } from './dto/update-todo.dto';
  import { TodoService } from './todo.service';
  
  @Controller('todos')
  export class TodoController {
    constructor(private readonly service: TodoService) {}
  
    @UseGuards(JwtAuthGuard)
    @Get()
    async index() {
      return await this.service.findAll();
    }
  
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createTodoDto: CreateTodoDto) {
      return await this.service.create(createTodoDto);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
      return await this.service.update(id, updateTodoDto);
    }
  
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
  }