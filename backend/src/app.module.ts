import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from './config/utils/getEnvVars';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envs.HOST,                  
      port: envs.DB_PORT,                         
      username: envs.USERDB,           
      password: envs.PASSWORD,           
      database: envs.DATABASE, 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true, 
    }),
    UsersModule,
    NotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
