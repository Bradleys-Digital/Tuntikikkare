# Tuntikikkare

### Kuvaus

Tuntikirjaustyökalu. 'Vanhempi ATK-ohjelmoitsija kirjaa tuntinsa Tuntikikkareella' 

Dokumentaatiota löytyy kaikille yhteisistä dokumentaatiosta 'tuntikirjausjärjestelmä harkkatyö' -kansiosta. 

### Teknologiat

- Node LTS
- Docker

#### Kirjastot
- [openapi-backend](https://github.com/anttiviljami/openapi-backend/blob/master/DOCS.mdexpress)
  - 

### Kehitys

Palvelimen käynnistys:

```
# Docker 
docker compose up
```
 

Kun palvelin on käynnissä sille voi tehdä hostilta kutsuja http://localhost:9000/[openapi3-operationId]

Eli esimerkiksi: http://localhost:9000/companies

Typescript tyyppien generointi openapi-spesifikaatiosta:

```
npm run generate-types
```


### Todo
- AWS-tili: käyttäjänhallinta esim. cognito, serverille kone ja tietokanta 
- Frontendin pystyttäminen