"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_1 = require("../auth");
const category_1 = require("../category");
const question_1 = require("../question");
const ROUTES = [
    { path: 'auth', module: auth_1.AuthModule },
    { path: 'categories', module: category_1.CategoryModule },
    { path: 'questions', module: question_1.QuestionModule }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_1.AuthModule, category_1.CategoryModule, core_1.RouterModule.register(ROUTES)],
        exports: [core_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map