import * as joi from 'joi';
import { EnvVarsI } from '../entities/EnvVarsI';

export const envSchema = joi
  .object<EnvVarsI>({
    HOST: joi.string().required(),
    PORT: joi.number().required(),
    USERDB: joi.string().required(),
    PASSWORD: joi.string().required(),
    DATABASE: joi.string().required(),
    JWT_SECRET: joi.string().required(),
    BCRYPT_JUMPS: joi.number().required(),
    DB_PORT: joi.number().required(),
  })
  .unknown(true);
