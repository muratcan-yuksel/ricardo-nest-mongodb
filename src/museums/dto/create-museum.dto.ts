import { ApiProperty } from '@nestjs/swagger';

export class CreateMuseumDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  datasetid: string;

  @ApiProperty()
  recordid: string;

  @ApiProperty()
  record_timestamp: string;

  @ApiProperty()
  ville: string;

  @ApiProperty()
  nomdep: string;

  @ApiProperty()
  total: number;

  @ApiProperty()
  regions: string;

  @ApiProperty()
  annee: string;

  @ApiProperty()
  payant: number;

  @ApiProperty()
  ref_musee: string;

  @ApiProperty()
  nom_du_musee: string;

  @ApiProperty()
  gratuit: number;
}
