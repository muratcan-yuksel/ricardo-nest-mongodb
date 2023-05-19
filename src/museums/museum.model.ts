import * as mongoose from 'mongoose';

export const MuseumSchema = new mongoose.Schema({
  datasetid: String,
  recordid: String,
  fields: {
    ville: String,
    nomdep: String,
    total: Number,
    regions: String,
    annee: String,
    payant: Number,
    ref_musee: String,
    nom_du_musee: String,
    gratuit: Number,
  },
  record_timestamp: String,
});

export interface Museum {
  datasetid: string;
  recordid: string;
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

    record_timestamp: string;
  };
}
