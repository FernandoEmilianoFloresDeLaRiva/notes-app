import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { envs } from '../utils/getEnvVars';
import { TokenService } from './services/token.service';
import { HashedService } from './services/hashed.service';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: envs.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthGuard, TokenService, HashedService],
  exports: [AuthGuard, TokenService, HashedService],
})
export class SecurityModule {}
