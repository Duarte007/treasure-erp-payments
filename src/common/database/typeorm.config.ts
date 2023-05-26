import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { PaymentHistory } from '../../modules/payments/entities/payment-history.entity';
import { PaymentMethod } from '../../modules/payments/entities/payment-methods.entity';
import { PaymentStatus } from '../../modules/payments/entities/payment-status.entity';
import { PaymentTransaction } from '../../modules/payments/entities/payment-transaction.entity';
import { Payment } from '../../modules/payments/entities/payment.entity';

const DATABASE_ENTITIES = [
  Payment,
  PaymentMethod,
  PaymentStatus,
  PaymentHistory,
  PaymentTransaction,
];

@Injectable()
export class DataBaseConnectionService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_DATABASE'),
      synchronize: false,
      logging: false,
      entities: DATABASE_ENTITIES,
    };
  }
}
