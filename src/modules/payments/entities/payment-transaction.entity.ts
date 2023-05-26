import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { Payment } from './payment.entity';

@Entity({ name: 'payment_transactions' })
export class PaymentTransaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  transaction_id: number;

  @ManyToOne(() => Payment)
  @JoinColumn({ name: 'payment_id' })
  payment: Payment;

  @Column()
  transaction_type: string;

  @Column()
  transaction_status: string;

  @Column()
  transaction_message: string;
}
