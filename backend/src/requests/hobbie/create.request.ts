import { IsString, IsNotEmpty, IsIn, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PassionType } from 'src/common/types';
import { ObjectId } from 'mongodb';
import { Type } from 'class-transformer';

export class CreateHobbieRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Please enter hobbie' })
  @IsString()
  title: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty({ message: 'Please enter passion type.' })
  @IsIn([PassionType.Medium, PassionType.High, PassionType.Low])
  passionType: string;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Please enter year.' })
  @IsNumber()
  year: number;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Please select user.' })
  @Type(() => ObjectId)
  user: string;
}
