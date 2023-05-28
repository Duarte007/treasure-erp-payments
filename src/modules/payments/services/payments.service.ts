import { Injectable, Logger } from '@nestjs/common';
import { PaymentsAdapter } from '../adapters/payments.adapter';
import { CreatePaymentDto, OrderEventDTO } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { PaymentsRepository } from '../repositories/payments.repository';

@Injectable()
export class PaymentsService {
  constructor(private readonly paymentsRepository: PaymentsRepository) {}

  create(createPaymentDto: CreatePaymentDto) {
    return 'This action adds a new payment';
  }

  async createFromOrderEvent(orderEventDto: OrderEventDTO) {
    const paymentToSave =
      PaymentsAdapter.fromOrderEventToDatabase(orderEventDto);

    const payment = await this.paymentsRepository.createPayment(paymentToSave);

    Logger.log({ message: 'Payment saved', payment });

    return payment;
  }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
