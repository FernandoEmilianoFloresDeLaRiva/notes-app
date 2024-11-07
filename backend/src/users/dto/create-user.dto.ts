import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CreateUserI } from '../interfaces';

export class CreateUserDto implements CreateUserI {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
