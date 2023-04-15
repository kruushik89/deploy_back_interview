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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const _common_1 = require("../../../common");
const user_1 = require("../../user");
let AuthService = class AuthService {
    constructor(userService, hashService, jwtService) {
        this.userService = userService;
        this.hashService = hashService;
        this.jwtService = jwtService;
    }
    async signUp({ email, password }) {
        try {
            const hashedPassword = await this.hashService.hashPassword(password);
            await this.userService.create({
                email,
                password: hashedPassword,
                roles: [_common_1.UserRole.USER]
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async signIn({ email, password }) {
        const foundUser = await this.userService.findOneByEmail(email);
        if (!foundUser) {
            throw new common_1.NotFoundException();
        }
        const isPasswordMatch = await this.hashService.comparePassword(password, foundUser.password);
        if (!isPasswordMatch) {
            throw new common_1.NotFoundException();
        }
        const payload = { id: foundUser.id, roles: foundUser.roles };
        const accessToken = this.jwtService.generateToken(payload, _common_1.TokenType.ACCESS);
        const refreshToken = this.jwtService.generateToken(payload, _common_1.TokenType.REFRESH);
        return { accessToken, refreshToken };
    }
    async refresh(token) {
        try {
            const _a = this.jwtService.validate(token, _common_1.TokenType.REFRESH), { exp } = _a, tokenPayloadWithoutExp = __rest(_a, ["exp"]);
            const accessToken = this.jwtService.generateToken(tokenPayloadWithoutExp, _common_1.TokenType.ACCESS);
            return { accessToken };
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_1.UserService,
        _common_1.HashService,
        _common_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map