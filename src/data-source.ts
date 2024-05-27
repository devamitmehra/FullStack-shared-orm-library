import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Settings } from './entities/settings.entity';
import { getEnvVariable, getEnvVariableAsNumber } from './config/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: getEnvVariable('DB_HOST'),
  port: getEnvVariableAsNumber('DB_PORT', 5432),
  username: getEnvVariable('DB_USERNAME'),
  password: getEnvVariable('DB_PASSWORD'),
  database: getEnvVariable('DB_NAME'),
  entities: [User, Settings],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
