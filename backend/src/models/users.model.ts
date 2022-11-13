import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;
}

const UserSchema = SchemaFactory.createForClass(User);

interface IUser extends Document {
  name: string;
}

export const UserModel = { name: User.name, schema: UserSchema };
