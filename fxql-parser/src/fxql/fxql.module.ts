import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeRate } from 'src/entities/exchange-rate.entity';
import { FxqlService } from './fxql.service';

@Module({
  imports: [TypeOrmModule.forFeature([ExchangeRate])],
  providers: [FxqlService],
  exports: [FxqlService],
})
export class FxqlModule {}
