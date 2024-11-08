import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateUserI } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto implements CreateUserI {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string;
  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}
