import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('exchange_rates') // decorator: defines the table name in the db
export class ExchangeRate {
  @PrimaryGeneratedColumn() // decorator: for PK that auto-increments
  id: number;

  @Column({ length: 3 }) // set length of the col to 3 char for currency codes
  sourceCurrency: string;

  @Column({ length: 3 })
  destinationCurrency: string;

  @Column('decimal', { precision: 10, scale: 4 }) // defines a decimal col for buyPrice
  buyPrice: number;

  @Column('decimal', { precision: 10, scale: 4 }) // defines a decimal col for sellPrice
  sellPrice: number;

  @Column() // defines a col for capAmount as an integer
  capAmount: number;
}
