import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentHistory } from '../../modules/payments/entities/payment-history.entity';
import { PaymentMethod } from '../../modules/payments/entities/payment-methods.entity';
import { PaymentStatus } from '../../modules/payments/entities/payment-status.entity';
import { PaymentTransaction } from '../../modules/payments/entities/payment-transaction.entity';
import { Payment } from '../../modules/payments/entities/payment.entity';
import { DataBaseConnectionService } from './typeorm.config';

const DATABASE_ENTITIES = [
  Payment,
  PaymentMethod,
  PaymentStatus,
  PaymentHistory,
  PaymentTransaction,
];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DataBaseConnectionService,
    }),
    TypeOrmModule.forFeature(DATABASE_ENTITIES),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
