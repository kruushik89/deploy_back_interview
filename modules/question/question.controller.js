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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
const _common_1 = require("../../common");
const dto_1 = require("./dto");
const pipes_1 = require("./pipes");
const question_service_1 = require("./question.service");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    async create(question) {
        return {
            data: await this.questionService.create(question)
        };
    }
    async findAll(query) {
        const { data, total } = await this.questionService.findAll(query);
        return {
            data,
            metadata: {
                total,
                limit: query.limit,
                offset: query.offset
            }
        };
    }
    async preview(query) {
        const previewQuery = Object.assign(Object.assign({}, query), { attributes: ['title', 'categories'] });
        const { data, total } = await this.questionService.findAll(previewQuery);
        return {
            data,
            metadata: {
                total,
                limit: query.limit,
                offset: query.offset
            }
        };
    }
    async findById(id) {
        return {
            data: await this.questionService.findOneById(id)
        };
    }
    async update(id, question) {
        await this.questionService.update(id, question);
    }
    async remove(_id) {
        await this.questionService.remove({ _id });
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
        description: 'The question did not pass validation'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateQuestion]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(_common_1.JwtAuthGuard),
    (0, swagger_1.ApiQuery)({ schema: new dto_1.QuestionQuery() }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successful get all questions',
        type: (_common_1.ApiResponse)
    }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'No access, missing token, or invalid role'
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QuestionQuery]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('preview'),
    (0, swagger_1.ApiQuery)({}),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successful get all questions',
        type: (_common_1.ApiResponse)
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.QuestionWithoutAttributesQuery]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "preview", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(_common_1.JwtAuthGuard),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successful get questions by id',
        type: (_common_1.ApiResponse)
    }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'No access, missing token' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'The id of question doesnt exists' }),
    __param(0, (0, common_1.Param)('id', _common_1.ParseObjectId, pipes_1.IsQuestionExists)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(_common_1.JwtAuthGuard, (0, _common_1.RoleGuard)(_common_1.UserRole.ADMIN)),
    (0, swagger_1.ApiOkResponse)({ description: 'Successful update' }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'No access, missing token, or invalid role'
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'The question did not pass validation, or id doesnt exists'
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'The id of question doesnt exists' }),
    __param(0, (0, common_1.Param)('id', _common_1.ParseObjectId, pipes_1.IsQuestionExists)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId, dto_1.UpdateQuestion]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(_common_1.JwtAuthGuard, (0, _common_1.RoleGuard)(_common_1.UserRole.ADMIN)),
    (0, swagger_1.ApiOkResponse)({ description: 'Successful remove' }),
    (0, swagger_1.ApiForbiddenResponse)({
        description: 'No access, missing token, or invalid role'
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'The id of question doesnt exists' }),
    __param(0, (0, common_1.Param)('id', _common_1.ParseObjectId, pipes_1.IsQuestionExists)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", Promise)
], QuestionController.prototype, "remove", null);
QuestionController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map