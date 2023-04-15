"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJwt = void 0;
const common_1 = require("@nestjs/common");
exports.GetJwt = (0, common_1.createParamDecorator)((_, ctx) => {
    const authorization = ctx.switchToHttp().getRequest().get('Authorization');
    if (!authorization) {
        throw new common_1.BadRequestException();
    }
    const [, token] = authorization.split(' ');
    return token;
});
//# sourceMappingURL=get-jwt.decorator.js.map