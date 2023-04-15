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
exports.JwtService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt = require("jsonwebtoken");
const enums_1 = require("../enums");
let JwtService = class JwtService {
    constructor(configService) {
        this.configService = configService;
        this.ACCESS_TOKEN_SECRET = this.configService.get('access_token_secret');
        this.REFRESH_TOKEN_SECRET = this.configService.get('refresh_token_secret');
        this.ACCESS_TOKEN_EXPIRATION = Number(this.configService.get('access_token_expiration'));
        this.REFRESH_TOKEN_EXPIRATION = Number(this.configService.get('refresh_token_expiration'));
    }
    generateToken(payload, type) {
        const iat = this.generateIat();
        const expiresIn = this.getTokenExp(type);
        const secret = this.getTokenSecret(type);
        const payloadWithIat = Object.assign(Object.assign({}, payload), { iat });
        return jwt.sign(payloadWithIat, secret, { expiresIn });
    }
    validate(token, type) {
        return jwt.verify(token, this.getTokenSecret(type));
    }
    generateIat() {
        return Math.floor(Date.now() / 1000) - 30;
    }
    getTokenExp(type) {
        const defaultExp = 900;
        const expMap = {
            [enums_1.TokenType.ACCESS]: this.ACCESS_TOKEN_EXPIRATION * 60,
            [enums_1.TokenType.REFRESH]: this.REFRESH_TOKEN_EXPIRATION * 60 * 4 * 360
        };
        return expMap[type] || defaultExp;
    }
    getTokenSecret(type) {
        const defaultSecret = this.ACCESS_TOKEN_SECRET;
        const secretMap = {
            [enums_1.TokenType.ACCESS]: this.ACCESS_TOKEN_SECRET,
            [enums_1.TokenType.REFRESH]: this.REFRESH_TOKEN_SECRET
        };
        console.log('secretMap[type]', secretMap[type]);
        return secretMap[type] || defaultSecret;
    }
};
JwtService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], JwtService);
exports.JwtService = JwtService;
//# sourceMappingURL=jwt.service.js.map