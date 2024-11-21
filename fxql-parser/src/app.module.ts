import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { FxqlModule } from './fxql/fxql.module';
import { ExchangeRate } from './entities/exchange-rate.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'cant-remember????????',
      password: 'cant-remember????????',
      database: 'fxql_db', //name of the postgresql db
      entities: [ExchangeRate],
      synchronize: true,
    }),
    FxqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
