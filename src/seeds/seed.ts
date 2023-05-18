import * as mongoose from 'mongoose';
import { MuseumDataModel } from '../schema/data.schema';

const jsonData = [
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: '22ea77a91951e2a6df4e08e8499b49bee856258d',
    fields: {
      ville: 'NIEDERBRONN-LES-BAINS',
      nomdep: 'BAS-RHIN',
      total: 3453,
      regions: 'ALSACE',
      annee: '2001',
      payant: 3182,
      ref_musee: '6732401',
      nom_du_musee: "Maison de l'Arch\u00e9ologie des Vosges du Nord",
      gratuit: 271,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: 'aba8309af348cffa580c8f3ad0f12ccd6c83aecc',
    fields: {
      ville: 'REICHSHOFFEN',
      nomdep: 'BAS-RHIN',
      total: 927,
      regions: 'ALSACE',
      annee: '2001',
      payant: 677,
      ref_musee: '6738801',
      nom_du_musee: 'Mus\u00e9e du Fer',
      gratuit: 250,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: 'd15d11dbb2a449e9648d5dc041b0ab27a3909ef9',
    fields: {
      ville: 'STRASBOURG',
      nomdep: 'BAS-RHIN',
      regions: 'ALSACE',
      annee: '2001',
      note: 'F',
      ref_musee: '6748207',
      nom_du_musee: 'Mus\u00e9e Historique',
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: 'd32f7c6417a6139174a3cc80575913bd5bb6d181',
    fields: {
      ville: 'STRASBOURG',
      nomdep: 'BAS-RHIN',
      total: 40214,
      regions: 'ALSACE',
      annee: '2001',
      payant: 21117,
      ref_musee: '6748206',
      nom_du_musee: "Mus\u00e9e de l'\u0152uvre Notre-Dame",
      gratuit: 19097,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: '637e4ca4d730cd9d81dfbce843ff4eea04de0810',
    fields: {
      ville: 'STRASBOURG',
      nomdep: 'BAS-RHIN',
      total: 58084,
      regions: 'ALSACE',
      annee: '2001',
      payant: 30837,
      ref_musee: '6748208',
      nom_du_musee: 'Mus\u00e9e Alsacien',
      gratuit: 27247,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: '0ce28347cbb32404249fc457a6e9e50cfbd33694',
    fields: {
      ville: 'GUEBWILLER',
      nomdep: 'HAUT-RHIN',
      total: 5400,
      regions: 'ALSACE',
      annee: '2001',
      payant: 3334,
      ref_musee: '6811201',
      nom_du_musee: 'Mus\u00e9e du Florival',
      gratuit: 2066,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: '9d03017c49a0a0dce3019802514fa4df2af3c2d9',
    fields: {
      ville: 'HUNINGE',
      nomdep: 'HAUT-RHIN',
      regions: 'ALSACE',
      annee: '2001',
      note: 'NC',
      ref_musee: '6814901',
      nom_du_musee: 'Mus\u00e9e Historique et Militaire de Huningue',
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: 'eab3582a5cfb41273d881095b74b05964f546978',
    fields: {
      ville: 'MULHOUSE',
      nomdep: 'HAUT-RHIN',
      total: 33706,
      regions: 'ALSACE',
      annee: '2001',
      payant: 27931,
      ref_musee: '6822404',
      nom_du_musee: 'Mus\u00e9e EDF Electropolis',
      gratuit: 5775,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: '1a2cbad45edb9becd864c5247d6f76c47efb8118',
    fields: {
      ville: 'RIQUEWIHR',
      nomdep: 'HAUT-RHIN',
      total: 6064,
      regions: 'ALSACE',
      annee: '2001',
      payant: 5424,
      ref_musee: '6827702',
      nom_du_musee: 'Mus\u00e9e du Dolder',
      gratuit: 640,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: 'd1fa0b2c4cb18fddb4eb2f0a488764f99643370b',
    fields: {
      ville: 'DOMME',
      nomdep: 'DORDOGNE',
      total: 22096,
      regions: 'AQUITAINE',
      annee: '2001',
      payant: 22096,
      ref_musee: '2415201',
      nom_du_musee: 'Mus\u00e9e Paul Reclus',
      gratuit: 0,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: '4d4214937302973a08530313e0a1fbfe78388535',
    fields: {
      ville: 'MONTIGNAC',
      nomdep: 'DORDOGNE',
      regions: 'AQUITAINE',
      annee: '2001',
      note: 'F',
      ref_musee: '2429101',
      nom_du_musee: 'Mus\u00e9e Eug\u00e8ne Le Roy et des Vieux M\u00e9tiers',
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: '58d5af9964ab774629b485e4296f035dfa43a130',
    fields: {
      ville: 'MUSSIDAN',
      nomdep: 'DORDOGNE',
      total: 3151,
      regions: 'AQUITAINE',
      annee: '2001',
      payant: 1801,
      ref_musee: '2429901',
      nom_du_musee:
        'Mus\u00e9e des Arts et Traditions Populaires du P\u00e9rigord',
      gratuit: 1350,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: '83b2ed15be149da68ee498ab059f43de35a50b83',
    fields: {
      ville: 'VILLANDRAUT',
      nomdep: 'GIRONDE',
      regions: 'AQUITAINE',
      annee: '2001',
      note: 'F',
      ref_musee: '3354701',
      nom_du_musee: 'Mus\u00e9e Municipal',
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: 'c30a65a62fa32d02c85c00b6509c7147a9e4fef2',
    fields: {
      ville: 'SABRES',
      nomdep: 'LANDES',
      total: 104203,
      regions: 'AQUITAINE',
      annee: '2001',
      payant: 94770,
      ref_musee: '4024601',
      nom_du_musee: 'Ecomus\u00e9e de la Grande Lande',
      gratuit: 9433,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
  {
    datasetid: 'frequentation-des-musees-de-france',
    recordid: 'e83bb72b6ed0f669c347e6f39733ee2649b0e86d',
    fields: {
      ville: 'AGEN',
      nomdep: 'LOT ET GARONNE',
      total: 14885,
      regions: 'AQUITAINE',
      annee: '2001',
      payant: 5482,
      ref_musee: '4700101',
      nom_du_musee: 'Mus\u00e9e des Beaux-Arts',
      gratuit: 9403,
    },
    record_timestamp: '2023-05-02T09:52:20.686+02:00',
  },
];

const seedDatabase = async () => {
  try {
    //already seeded, no need to seed again
    // await mongoose.connect(process.env.MONGODB_URI);

    await MuseumDataModel.deleteMany({}).exec();

    await MuseumDataModel.insertMany(jsonData);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
