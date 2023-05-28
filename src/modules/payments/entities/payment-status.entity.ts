import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'payment_status' })
export class PaymentStatus extends BaseEntity {
  @PrimaryGeneratedColumn()
  payment_status_id: number;

  @Column()
  payment_status_name: string;
}

export enum PaymentStatusEnum {
  PENDING = 1,
  COMPLETED = 2,
  CANCELED = 3,
  REFUNDED = 4,
}
