import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsNumber,
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
