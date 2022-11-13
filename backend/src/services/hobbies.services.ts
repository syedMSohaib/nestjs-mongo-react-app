import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hobbie, HobbieDocument } from './../models/hobbies.model';
@Injectable()
export class HobbieService {
  private hobbies: Hobbie[] = [];

  constructor(
    @InjectModel(Hobbie.name) private hobbieModal: Model<HobbieDocument>,
  ) {}

  async findByUserId(id: String): Promise<Hobbie[]> {
    console.log('id', id);
    return this.hobbieModal.find({ user: id });
  }

  async create(data: Hobbie): Promise<Hobbie> {
    const hobbie = new this.hobbieModal(data);
    return hobbie.save();
  }

  async delete(id: String): Promise<Boolean> {
    const result = await this.hobbieModal.deleteOne({ _id: id });

    if (result.acknowledged !== true) {
      throw new NotFoundException('Could not find Hobbie.');
    }

    return true;
  }
}
