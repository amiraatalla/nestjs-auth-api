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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
const response_base_1 = require("../response.base");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async create(res, createTodoDto) {
        try {
            let data = await this.todoService.create(createTodoDto);
            return response_base_1.AppResponse.ok(res, data, 'Success create todo!');
        }
        catch (e) {
            return response_base_1.AppResponse.badRequest(res, '', e.message);
        }
    }
    async findAll(res) {
        try {
            let data = await this.todoService.findAll();
            return response_base_1.AppResponse.ok(res, data);
        }
        catch (e) {
            return response_base_1.AppResponse.badRequest(res, '', e.message);
        }
    }
    async findOne(res, id) {
        try {
            let data = await this.todoService.findOne(id);
            return response_base_1.AppResponse.ok(res, data);
        }
        catch (e) {
            return response_base_1.AppResponse.badRequest(res, '', e.message);
        }
    }
    async update(res, id, updateTodoDto) {
        try {
            let data = await this.todoService.update(id, updateTodoDto);
            return response_base_1.AppResponse.ok(res, data, 'Todo has been updated!');
        }
        catch (e) {
            return response_base_1.AppResponse.badRequest(res, '', e.message);
        }
    }
    async remove(res, id) {
        try {
            let data = await this.todoService.remove(id);
            return response_base_1.AppResponse.ok(res, '', data);
        }
        catch (e) {
            return response_base_1.AppResponse.badRequest(res, '', e.message);
        }
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_todo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "findOne", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_todo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "remove", null);
TodoController = __decorate([
    common_1.Controller('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map