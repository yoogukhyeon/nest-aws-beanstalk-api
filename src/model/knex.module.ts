import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [
    KnexModule.forRootAsync(
      {
        useFactory: () => ({
          config: {
            client: 'mysql',
            version: '5.7',
            useNullAsDefault: true,
            debug: true,
            connection: {
              host: process.env.DB_HOST,
              user: process.env.DB_USER,
              port: 3306,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_MAIN_DATABASE,
            },
            pool: {
              min: 2,
              max: 10,
            },
          },
        }),
      },
      'mainConnection',
    ),
  ],
})
export class KnexMultiConnectionsModule {}
