import { OrderEventDTO } from '../dto/create-payment.dto';
import { PaymentRecord } from '../entities/payment.entity';

export class PaymentsAdapter {
  static fromOrderEventToDatabase(orderEventDto: OrderEventDTO): PaymentRecord {
    return {
      payment_uuid: orderEventDto.payment.payment_uuid,
      order_uuid: orderEventDto.order_uuid,
      payment_method_id: orderEventDto.payment.method,
      payment_date: orderEventDto.payment.date,
      payment_amount: orderEventDto.payment.amount,
    };
  }
}
