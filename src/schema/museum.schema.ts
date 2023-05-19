import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MuseumDocument = HydratedDocument<Museum>;

@Schema()
export class Museum {
  @Prop()
  datasetid: string;

  @Prop()
  recordid: number;

  @Prop({ type: Object }) // Specify the type as Object
  fields: {
    ville: string;
    nomdep: string;
    total: number;
    regions: string;
    annee: string;
    payant: number;
    ref_musee: string;
    nom_du_musee: string;
    gratuit: number;
  };

  @Prop()
  record_timestamp: string;
}

export const MuseumSchema = SchemaFactory.createForClass(Museum);
