import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class PaymentOrderDTO {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  @IsDefined()
  uuid: string;
}

export class CreatePaymentDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  @IsDefined()
  uuid: string;
  @ApiProperty()
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  method: number;
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @ApiProperty({ type: PaymentOrderDTO })
  @IsDefined()
  @ValidateNested()
  order: PaymentOrderDTO;
  @ApiProperty()
  @IsDefined()
  @IsDateString()
  @IsNotEmpty()
  date: Date;
}

export class OrderItemsEventDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  product_uuid: string;
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class OrderCustomerEventDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  customer_uuid: string;
}

export class OrderPaymentEventDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  payment_uuid: string;
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  method: number;
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @ApiProperty()
  @IsDefined()
  @IsDateString()
  @IsNotEmpty()
  date: Date;
}

export class OrderEventDTO {
  @ApiProperty()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  order_uuid: string;
  @ApiProperty({ type: OrderCustomerEventDTO })
  @IsDefined()
  @ValidateNested()
  customer: OrderCustomerEventDTO;
  @ApiProperty({ type: OrderPaymentEventDTO })
  @IsDefined()
  @ValidateNested()
  payment: OrderPaymentEventDTO;
  @ApiProperty({ type: OrderItemsEventDTO, isArray: true })
  @IsDefined()
  @ValidateNested()
  items: OrderItemsEventDTO[];
  @ApiProperty()
  @IsDefined()
  @IsDateString()
  @IsNotEmpty()
  date: Date;
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
