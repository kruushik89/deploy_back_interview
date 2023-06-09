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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestion = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const _common_1 = require("../../../common");
class UpdateQuestion {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    __metadata("design:type", String)
], UpdateQuestion.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    __metadata("design:type", String)
], UpdateQuestion.prototype, "body", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: 'string' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsMongoId)({ each: true }),
    (0, class_validator_1.ArrayNotEmpty)(),
    __metadata("design:type", Array)
], UpdateQuestion.prototype, "categories", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: _common_1.LevelOfPreparation }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsEnum)(_common_1.LevelOfPreparation, { each: true }),
    __metadata("design:type", Array)
], UpdateQuestion.prototype, "levelOfPreparation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: _common_1.DevelopmentDirection }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsEnum)(_common_1.DevelopmentDirection, { each: true }),
    __metadata("design:type", Array)
], UpdateQuestion.prototype, "developmentDirection", void 0);
exports.UpdateQuestion = UpdateQuestion;
//# sourceMappingURL=update-question.dto.js.map