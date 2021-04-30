"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const todo_transformer_1 = require("./transformers/todo.transformer");
let TodoService = class TodoService {
    constructor(TodoModel) {
        this.TodoModel = TodoModel;
    }
    async create(createTodoDto) {
        let data = new this.TodoModel(createTodoDto);
        return todo_transformer_1.TodoTransformer.singleTransform(await data.save());
    }
    async findAll() {
        let data = await this.TodoModel.find();
        if (data.length < 1) {
            return [];
        }
        return todo_transformer_1.TodoTransformer.transform(data);
    }
    async findOne(id) {
        console.log(id);
        let data = await this.TodoModel.findById(id);
        if (!data) {
            throw new Error('Data not found!');
        }
        return todo_transformer_1.TodoTransformer.singleTransform(data);
    }
    async update(id, updateTodoDto) {
        let data = await this.TodoModel.findByIdAndUpdate(id, updateTodoDto, { 'new': true });
        if (!data) {
            throw new Error("Todo is not found!");
        }
        return todo_transformer_1.TodoTransformer.singleTransform(data);
    }
    async remove(id) {
        let data = await this.TodoModel.findByIdAndRemove(id);
        if (!data) {
            throw new Error("Todo is not found!");
        }
        return "Todo has been deleted!";
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Todo')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map