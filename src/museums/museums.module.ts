import { Module } from '@nestjs/common';
import { MuseumsService } from './museums.service';
import { MuseumsController } from './museums.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MuseumSchema } from './museum.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'MuseumData', schema: MuseumSchema }]),
  ],
  controllers: [MuseumsController],
  providers: [MuseumsService],
})
export class MuseumsModule {}
