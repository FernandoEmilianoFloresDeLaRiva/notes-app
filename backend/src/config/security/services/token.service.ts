import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenService {
  constructor(private readonly _jwtService: JwtService) {}
  async sign(payload: any): Promise<string> {
    try {
      return await this._jwtService.sign(payload);
    } catch (error) {
      throw new Error(error);
    }
  }
  async decode(token: string): Promise<any> {
    try {
      const {
        iat: _,
        exp,
        ...userPayload
      } = await this._jwtService.decode(token);
      const currentDate = new Date();
      const expiresDate = new Date(exp);
      return {
        user: userPayload,
        isExpired: +expiresDate <= +currentDate / 1000,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
