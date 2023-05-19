import { Injectable } from '@nestjs/common';
import { CreateMuseumDto } from './dto/create-museum.dto';
import { UpdateMuseumDto } from './dto/update-museum.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Museum } from './museum.model';

@Injectable()
export class MuseumsService {
  constructor(
    @InjectModel('MuseumData') private readonly museumModel: Model<Museum>,
  ) {}

  async create(createMuseumDto: CreateMuseumDto) {
    await this.museumModel.create(createMuseumDto);
  }

  async findAll() {
    return await this.museumModel.find().exec();
  }

  async findOne(id: string) {
    return await this.museumModel.findById(id).exec();
  }

  async update(id: string, updateMuseumDto: UpdateMuseumDto) {
    return await this.museumModel
      .findByIdAndUpdate(id, updateMuseumDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.museumModel.findByIdAndDelete(id).exec();
  }
}
