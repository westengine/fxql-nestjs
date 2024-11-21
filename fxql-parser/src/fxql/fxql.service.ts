import { Injectable, BadRequestException } from '@nestjs/common';
import { ExchangeRate } from 'src/entities/exchange-rate.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FxqlService {
  constructor(
    @InjectRepository(ExchangeRate)
    private readonly exchangeRateRepository: Repository<ExchangeRate>,
  ) {}

  async parseFXQL(fxql: string): Promise<ExchangeRate[]> {
    const statements = this.splitStatements(fxql);
    const exchangeRates: ExchangeRate[] = [];

    for (const statement of statements) {
      const parsedRate = this.validateAndParseStatement(statement);
      const existingRate = await this.exchangeRateRepository.findOne({
        where: {
          sourceCurrency: parsedRate.sourceCurrency,
          destinationCurrency: parsedRate.destinationCurrency,
        },
      });

      if (existingRate) {
        existingRate.buyPrice = parsedRate.buyPrice;
        existingRate.sellPrice = parsedRate.sellPrice;
        existingRate.capAmount = parsedRate.capAmount;
        await this.exchangeRateRepository.save(existingRate);
        exchangeRates.push(existingRate);
      } else {
        const newRate = this.exchangeRateRepository.create(parsedRate);
        await this.exchangeRateRepository.save(newRate);
        exchangeRates.push(newRate);
      }
    }

    return exchangeRates;
  }

  private splitStatements(fxql: string): string[] {
    return fxql.split(/\n\s*\n/).filter(Boolean);
  }

  private validateAndParseStatement(statement: string): Partial<ExchangeRate> {
    const regex =
      /^([A-Z]{3})-([A-Z]{3}) {\s*BUY (\d+(\.\d+)?)\s*SELL (\d+(\.\d+)?)\s*CAP (\d+)\s*}$/;
    const match = statement.match(regex);

    if (!match) {
      throw new BadRequestException('Invalid FXQL statement');
    }

    const [
      ,
      sourceCurrency,
      destinationCurrency,
      buyPrice,
      ,
      sellPrice,
      ,
      capAmount,
    ] = match;

    return {
      sourceCurrency,
      destinationCurrency,
      buyPrice: parseFloat(buyPrice),
      sellPrice: parseFloat(sellPrice),
      capAmount: parseInt(capAmount, 10),
    };
  }
}
