##  🐸 Description 

:construction: THIS REPOSITORY IS STILL A WORK IN PROGRESS :construction:

This is a GraphQL API written with [Nest](https://github.com/nestjs/nest) for **Animal Crossing: New Horizons**. The data is from [Data Spreadsheet for Animal Crossing New Horizons](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/).  Thanks for providing this ❤

If you want to access the Spreadsheet Data you currently have to create a .env file and set the `API_KEY` variable from the Google API ([How to get one](https://cloud.google.com/docs/authentication/api-keys)).

I am using the [gitmoji](https://gitmoji.carloscuesta.me/) emoji guide for commit messages.

## ⚙ Running the app

Playground with Docs is available at https://animal-crossing-graphql-api.herokuapp.com/graphql or local at http://localhost:8080/graphql

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🗺 Roadmap

- [x] Villagers
- [ ] Critterpedia
  - [ ] Insects ***(in Progress)***
  - [ ] Fish
  - [ ] Fossils
- [ ] Art
- [ ] ...other categories
- [ ] Let others access the data without having to authenticate

  - [ ] set up own database
- [x] **🚀 Deploy with Heroku**