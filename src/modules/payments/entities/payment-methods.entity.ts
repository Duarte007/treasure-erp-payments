import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'payment_methods' })
export class PaymentMethod extends BaseEntity {
  @PrimaryGeneratedColumn()
  payment_method_id: number;

  @Column()
  payment_method_name: string;

  @Column()
  payment_method_description: string;
}
