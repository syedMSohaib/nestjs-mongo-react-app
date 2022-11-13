import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../models/users.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async index(): Promise<User[]> {
    return this.userModel.find({});
  }

  async find(id: String): Promise<User> {
    return this.userModel.findById(id);
  }

  async create(data: User): Promise<User> {
    const user = new this.userModel(data);
    return user.save();
  }
}
