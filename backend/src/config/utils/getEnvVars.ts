import 'dotenv/config';
import { envSchema } from '../validators/EnvVarsValidator.Schema';
import { EnvVarsI } from '../entities/EnvVarsI';

const getEnvVars = () : EnvVarsI => {
  const { error, value } = envSchema.validate({
    ...process.env,
  });

  if (error) {
    throw new Error(
      `There was an error with the config validation ${error.message}`,
    );
  }

  const envVars: EnvVarsI = value;

  return {
    HOST: envVars.HOST,
    PORT: envVars.PORT,
    DB_PORT: envVars.DB_PORT,
    USERDB: envVars.USERDB,
    PASSWORD: envVars.PASSWORD,
    DATABASE: envVars.DATABASE,
    JWT_SECRET: envVars.JWT_SECRET,
    BCRYPT_JUMPS: envVars.BCRYPT_JUMPS,
  };
};

export const envs = getEnvVars();