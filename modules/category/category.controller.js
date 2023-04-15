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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const _common_1 = require("../../common");
const category_service_1 = require("./category.service");
const dto_1 = require("./dto");
const pipes_1 = require("./pipes");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async create(category) {
        return {
            data: await this.categoryService.create(category)
        };
    }
    async findAll() {
        return {
            data: await this.categoryService.findAll()
        };
    }
    async update(id, category) {
        await this.categoryService.update(id, category);
    }
    async remove(_id) {
        await this.categoryService.remove({ _id });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(_common_1.JwtAuthGuard, (0, _common_1.RoleGuard)(_common_1.UserRole.ADMIN)),
    (0, swagger_1.ApiOkResponse)({ description: 'Successful create' }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'No access, missing token, or invalid role'
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The category did not pass validation'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCategory]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(_common_1.JwtAuthGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successful get all categories',
        type: (_common_1.ApiResponse)
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'No access, missing token, or invalid role'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(_common_1.JwtAuthGuard, (0, _common_1.RoleGuard)(_common_1.UserRole.ADMIN)),
    (0, swagger_1.ApiOkResponse)({ description: 'Successful update' }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'No access, missing token, or invalid role'
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The category did not pass validation, or id doesnt exists'
    }),
    __param(0, (0, common_1.Param)('id', _common_1.ParseObjectId, pipes_1.IsCategoryExists)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, dto_1.UpdateCategory]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(_common_1.JwtAuthGuard, (0, _common_1.RoleGuard)(_common_1.UserRole.ADMIN)),
    (0, swagger_1.ApiOkResponse)({ description: 'Successful remove' }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'No access, missing token, or invalid role'
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'The id of category doesnt exists' }),
    __param(0, (0, common_1.Param)('id', _common_1.ParseObjectId, pipes_1.IsCategoryExists)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "remove", null);
CategoryController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map