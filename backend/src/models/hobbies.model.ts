import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './users.model';
import { PassionType } from '../common/types';

export type HobbieDocument = Hobbie & Document;

@Schema()
export class Hobbie {
  @Prop({ required: true, enum: PassionType })
  passionType: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true, type: Types.ObjectId, ref: User.name })
  user: User;
}

const HobbieSchema = SchemaFactory.createForClass(Hobbie);

export const HobbieModel = { name: Hobbie.name, schema: HobbieSchema };
