# Tuntikikkare

### Kuvaus

Tuntikirjaustyökalu 

Dokumentaatiota löytyy kaikille yhteisistä dokumentaatiosta 'tuntikirjausjärjestelmä harkkatyö' -kansiosta. 

### Teknologiat

- Node 16
- 
#### Kirjastot
- [openapi-backend](https://github.com/anttiviljami/openapi-backend/blob/master/DOCS.mdexpress)
  - 

### Kehitys

Vaatimukset: 
 - Node 16 (npm install ei toimi LTS-versiolla)

Palvelimen käynnistys:

```
# lokaalia nodea hyödyntäen backend -kansiossa
npm install && npm run build
npm start 
```

Kun palvelin on käynnissä sille voi kutsuja http://localhost:9000/[openapi3-operationId]

Eli esimerkiksi: http://localhost:9000/companies

Typescript tyyppien generointi openapi-spesifikaatiosta:

```
npm run generate-types
```


### Todo
- AWS-tili: käyttäjänhallinta esim. cognito, serverille kone ja tietokanta 
- Frontendin pystyttäminen
- dockeroidun ajoympäristön viimeistely