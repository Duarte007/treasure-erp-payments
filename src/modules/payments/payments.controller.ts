import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TokenAuthQueryParam } from '../../common/dtos/token-auth-qs.dto';
import { PubsubPostBody } from '../../common/pubsub/interfaces/pubsub-post-body';
import { CreatePaymentDto, OrderEventDTO } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentsService } from './services/payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentsService.create(createPaymentDto);
  }

  @Post('order-event')
  createFromOrderEvent(
    @Body() orderEvent: PubsubPostBody,
    @Query() params: TokenAuthQueryParam,
  ) {
    const orderEventDto: OrderEventDTO = orderEvent.message
      .data as unknown as OrderEventDTO;
    return this.paymentsService.createFromOrderEvent(orderEventDto);
  }

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentsService.update(+id, updatePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentsService.remove(+id);
  }
}
