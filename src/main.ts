import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { DITokens } from './common/enums/DITokens';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Treasure ERP - Payments Microservice')
    .setDescription('Payments Service')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(morgan('dev'));
  app.useGlobalPipes(new ValidationPipe());

  const port = +process.env.PORT || 3000;
  await app.listen(port).then(() => {
    Logger.log(`>>>>> API running on port ${port}`);
    app.useLogger(app.get(DITokens.LoggerProvider));
  });
}
bootstrap();
