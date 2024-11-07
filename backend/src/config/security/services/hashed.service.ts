
import { Injectable } from '@nestjs/common';
import {hashSync, compareSync} from 'bcrypt';
import { envs } from 'src/config/utils/getEnvVars';

@Injectable()
export class HashedService {
  private readonly salts = envs.BCRYPT_JUMPS;
  async hashedPassword(password: string): Promise<string> {
    try {
      const res = await hashSync(password, this.salts);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
  async comparePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    try {
      const res = await compareSync(password, hashedPassword);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}
