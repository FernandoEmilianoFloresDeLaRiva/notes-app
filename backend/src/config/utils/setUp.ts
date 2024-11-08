import { INestApplication, ValidationPipe } from '@nestjs/common';
import { CustomExceptionFilter } from '../filters/customException.filter';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from 'src/users/dto';
import { CreateNoteDto } from 'src/notes/dto/create-note.dto';
import { UpdateNoteDto } from 'src/notes/dto/update-note.dto';
import { CreateCategoryDto } from 'src/categories/dto';
import { CategoryDTO } from 'src/categories/dto/category.dto';

export const setUp = (app: INestApplication): INestApplication => {
  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new CustomExceptionFilter());
  //swagger
  const config = new DocumentBuilder()
    .setTitle('Notes Backend')
    .setDescription(
      'This is a backend developed by fernando flores, you can test the endpoints, good luck and thank you.',
    )
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description:
          'Enter the value of the token, without the keyword “Bearer”.',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();
  const configOptions: SwaggerDocumentOptions = {
    extraModels: [
      CreateUserDto,
      LoginUserDto,
      UpdateUserDto,
      CreateNoteDto,
      UpdateNoteDto,
      CreateCategoryDto,
      CategoryDTO,
    ],
  };
  const document = SwaggerModule.createDocument(app, config, configOptions);
  SwaggerModule.setup('swagger', app, document);
  return app;
};
