"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const modules_1 = require("./modules");
async function bootstrap() {
    const app = await core_1.NestFactory.create(modules_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({ origin: true, credentials: true });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    (0, class_validator_1.useContainer)(app.select(modules_1.AppModule), { fallbackOnErrors: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Interviews API')
        .setDescription('This API is made to store different interview questions')
        .setVersion('1.0')
        .addTag('API')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('port');
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map