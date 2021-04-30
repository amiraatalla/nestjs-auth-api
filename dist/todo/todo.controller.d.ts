import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(res: any, createTodoDto: CreateTodoDto): Promise<Response>;
    findAll(res: any): Promise<Response>;
    findOne(res: any, id: string): Promise<Response>;
    update(res: any, id: string, updateTodoDto: UpdateTodoDto): Promise<Response>;
    remove(res: any, id: string): Promise<Response>;
}
