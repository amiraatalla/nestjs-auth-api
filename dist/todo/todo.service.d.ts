import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Model } from 'mongoose';
import { Todo } from './entities/todo.entity';
import { TodoTransformer } from './transformers/todo.transformer';
export declare class TodoService {
    private TodoModel;
    constructor(TodoModel: Model<any, Todo>);
    create(createTodoDto: CreateTodoDto): Promise<TodoTransformer>;
    findAll(): Promise<TodoTransformer>;
    findOne(id: string): Promise<TodoTransformer>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<TodoTransformer>;
    remove(id: string): Promise<String>;
}
