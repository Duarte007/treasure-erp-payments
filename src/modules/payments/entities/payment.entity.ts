import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { PaymentMethod } from './payment-methods.entity';
import { PaymentStatus } from './payment-status.entity';

@Entity({ name: 'payments' })
export class Payment extends BaseEntity {
  @PrimaryGeneratedColumn()
  payment_id: number;

  @Column({ type: 'uuid', nullable: false })
  @Index('idx_payment_uuid')
  payment_uuid: string;

  @Column({ type: 'uuid', nullable: false })
  @Index('idx_order_uuid')
  order_uuid: string;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'payment_method_id' })
  payment_method: PaymentMethod;

  @ManyToOne(() => PaymentStatus)
  @JoinColumn({ name: 'payment_status_id' })
  payment_status: PaymentStatus;

  @Column()
  payment_date: Date;

  @Column()
  payment_amount: number;
}
