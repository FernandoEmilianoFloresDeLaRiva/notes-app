import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { envs } from './config/utils/getEnvVars';

async function bootstrap() {
  const logger = new Logger('Main')
  const app = await NestFactory.create(AppModule);
  const port = envs.PORT;
  logger.log(`Application started on port ${port}`);
  await app.listen(port);
}

bootstrap();
