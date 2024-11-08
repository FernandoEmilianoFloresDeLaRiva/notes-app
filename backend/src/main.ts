import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { envs } from './config/utils/getEnvVars';
import { setUp } from './config/utils/setUp';

async function bootstrap() {
  const logger = new Logger('Main');
  let app = await NestFactory.create(AppModule);
  app = setUp(app);
  const port = envs.PORT;
  logger.log(`Application started on port ${port}`);
  await app.listen(port);
}

bootstrap();
