# Tuntikikkare

### Kuvaus

Tuntikirjaustyökalu 

Dokumentaatiota löytyy kaikille yhteisistä dokumentaatiosta 'tuntikirjausjärjestelmä harkkatyö' -kansiosta. 

### Teknologiat

- Node 16
- Docker

#### Kirjastot
- [openapi-backend](https://github.com/anttiviljami/openapi-backend/blob/master/DOCS.mdexpress)
  - 

### Kehitys

Vaatimukset: 
 - Docker TAI
 - Node 16 (npm install ei toimi LTS-versiolla)

Palvelimen käynnistys:

```
# Dockerin avulla
docker compose up
```

```
# lokaalia nodea hyödyntäen backend -kansiossa
npm install && npm run build
npm start 
```

Kun palvelin on käynnissä sille voi kutsuja http://localhost:9000/[openapi3-operationId]

Eli esimerkiksi: http://localhost:9000/companies

Typescript tyyppien generointi openapi-spesifikaatiosta:

```
# tämän voi ajaa docker kontissa tai host-koneella
npm run generate-types
```


### Todo
- AWS-tili: käyttäjänhallinta esim. cognito, serverille kone ja tietokanta 
- Frontendin pystyttäminen