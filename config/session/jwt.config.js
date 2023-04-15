"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const jwtConfig = () => ({
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    access_token_expiration: process.env.ACCESS_TOKEN_EXPIRATION,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    refresh_token_expiration: process.env.REFRESH_TOKEN_SECRET
});
exports.jwtConfig = jwtConfig;
//# sourceMappingURL=jwt.config.js.map