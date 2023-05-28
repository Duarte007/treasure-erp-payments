import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../common/database/database.module';
import { PaymentsController } from './payments.controller';
import { PaymentsRepository } from './repositories/payments.repository';
import { PaymentsService } from './services/payments.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentsRepository],
})
export class PaymentsModule {}
