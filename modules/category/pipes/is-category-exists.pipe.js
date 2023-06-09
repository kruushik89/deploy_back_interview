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
exports.IsCategoryExists = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../category.service");
let IsCategoryExists = class IsCategoryExists {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async transform(_id) {
        const isExists = await this.categoryService.exists({ _id });
        if (!isExists) {
            throw new common_1.NotFoundException();
        }
        return _id;
    }
};
IsCategoryExists = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], IsCategoryExists);
exports.IsCategoryExists = IsCategoryExists;
//# sourceMappingURL=is-category-exists.pipe.js.map