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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResponse = void 0;
const common_1 = require("@nestjs/common");
class AppResponse {
    static ok(res, values, message = "") {
        return res.status(common_1.HttpStatus.OK).json({
            "values": values,
            "message": message
        });
    }
    static badRequest(res, values, message = "") {
        return res.status(common_1.HttpStatus.BAD_REQUEST).json({
            "values": values,
            "message": message
        });
    }
}
__decorate([
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", typeof (_a = typeof common_1.Response !== "undefined" && common_1.Response) === "function" ? _a : Object)
], AppResponse, "ok", null);
__decorate([
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", typeof (_b = typeof common_1.Response !== "undefined" && common_1.Response) === "function" ? _b : Object)
], AppResponse, "badRequest", null);
exports.AppResponse = AppResponse;
//# sourceMappingURL=response.base.js.map