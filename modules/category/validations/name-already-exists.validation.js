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
exports.NameAlreadyExists = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const category_service_1 = require("../category.service");
let NameAlreadyExists = class NameAlreadyExists {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async validate(name) {
        return !(await this.categoryService.exists({ name }));
    }
    defaultMessage() {
        return 'This category name already exists';
    }
};
NameAlreadyExists = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsNameAlreadyExists', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], NameAlreadyExists);
exports.NameAlreadyExists = NameAlreadyExists;
//# sourceMappingURL=name-already-exists.validation.js.map