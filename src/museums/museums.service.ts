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

  create(createMuseumDto: CreateMuseumDto) {
    return 'This action adds a new museum';
  }

  async findAll() {
    return await this.museumModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} museum`;
  }

  update(id: number, updateMuseumDto: UpdateMuseumDto) {
    return `This action updates a #${id} museum`;
  }

  remove(id: number) {
    return `This action removes a #${id} museum`;
  }
}
