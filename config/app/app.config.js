"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const appConfig = () => ({
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI
});
exports.appConfig = appConfig;
//# sourceMappingURL=app.config.js.map