import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './services/payments.service';

@Module({
  controllers: [DatabaseModule, PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
