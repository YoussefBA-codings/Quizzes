import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: /* A configuration object for TypeORM. */
TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'quiz',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
