import { createConnection } from 'typeorm';
console.log('DIRNEAME', __dirname)
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'prisma',
      password: 'prisma',
      database: 'prisma',
      entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    })
      .catch((error)=> console.log(error)),
  },
];
