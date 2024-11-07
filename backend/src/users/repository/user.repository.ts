import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserI } from '../interfaces';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly _userRepository: Repository<User>,
  ) {}

  async createUser(reqUser: CreateUserI) {
    try {
      const res = await this._userRepository.save(reqUser);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByEmail(email : string){
    try {
      const res = await this._userRepository.findOne({
        where : {
          email : email,
        }
      })
      return res
    } catch (error) {
      throw new Error(error);
    }
  }
}
