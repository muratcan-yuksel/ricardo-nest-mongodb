# NestS - MongoDB Museums API

Swagger docs can be found at http://localhost:3000/api

Base endpoint=> http://localhost:3000/museums

Get request will return all museums in the database
Post request with the following DTO will create a new one:

Sample response =>

```
{
    "fields": {
      "ville": "REICHSHOFFEN",
      "nomdep": "BAS-RHIN",
      "total": 927,
      "regions": "ALSACE",
      "annee": "2001",
      "payant": 677,
      "ref_musee": "6738801",
      "nom_du_musee": "Musée du Fer",
      "gratuit": 250
    },
    "_id": "6466f4596df23b5c46a0361a",
    "datasetid": "frequentation-des-musees-de-france",
    "recordid": "aba8309af348cffa580c8f3ad0f12ccd6c83aecc",
    "record_timestamp": "2023-05-02T09:52:20.686+02:00",
    "__v": 0
  },
```

For get,patch and delete requests, the id of the museum is required.
