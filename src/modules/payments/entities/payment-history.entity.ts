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

@Entity({ name: 'payment_history' })
export class PaymentHistory extends BaseEntity {
  @PrimaryGeneratedColumn()
  history_id: number;

  @Column({ type: 'uuid', nullable: false })
  @Index('idx_order_uuid_ph')
  order_uuid: string;

  @ManyToOne(() => PaymentMethod)
  @JoinColumn({ name: 'payment_method_id' })
  payment_method?: PaymentMethod;

  @Column()
  payment_method_id: number;

  @Column()
  payment_date: Date;

  @Column()
  payment_amount: number;

  @ManyToOne(() => PaymentStatus)
  @JoinColumn({ name: 'payment_status_id' })
  payment_status?: PaymentStatus;

  @Column()
  payment_status_id: number;
}
