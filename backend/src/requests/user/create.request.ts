import { IsString, IsNotEmpty, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRequest {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Please enter user name' })
  @IsString()
  name: string;
}
