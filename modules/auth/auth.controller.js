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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const _common_1 = require("../../common");
const dto_1 = require("./dto");
const services_1 = require("./services");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(credentials) {
        await this.authService.signUp(credentials);
    }
    async signIn(credentials) {
        return {
            data: await this.authService.signIn(credentials)
        };
    }
    async refresh(refresh) {
        console.log('refresh', refresh);
        return {
            data: await this.authService.refresh(refresh)
        };
    }
};
__decorate([
    (0, common_1.Post)('sign-up'),
    (0, swagger_1.ApiOkResponse)({ description: 'Successful registration' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'This email already exists or invalid format of email'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignUp]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('sign-in'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Successful login',
        type: (_common_1.ApiResponse)
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Login or password do not match' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignIn]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, swagger_1.ApiOkResponse)({ description: 'Successful token regeneration' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'The refresh token may be invalid' }),
    __param(0, (0, _common_1.GetJwt)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
AuthController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [services_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map