"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDbConfig = void 0;
const mongoDbConfig = () => {
    const mongodbName = process.env.MONGODB_NAME;
    const mongodbPassword = process.env.MONGODB_PASSWORD;
    const mongodbCluster = process.env.MONGODB_CLUSTER;
    return {
        mongodb_uri: `mongodb+srv://${mongodbName}:${mongodbPassword}@${mongodbCluster}/?retryWrites=true&w=majority`
    };
};
exports.mongoDbConfig = mongoDbConfig;
//# sourceMappingURL=mongo-db.config.js.map