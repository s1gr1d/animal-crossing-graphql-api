import { Injectable } from '@nestjs/common';
import { DbConnectorService } from '../db-connector/db-connector.service';
import { Villager } from '../../types/categories/villager';
import { capitalizeAllWords, formatBirthday } from '../../util/modifyData';
import { Insect } from '../../types/categories/insect';

@Injectable()
export class CritterpediaService {
  constructor(private readonly dbConnector: DbConnectorService) {}

  private toGqlInsectSchema = (data: Insect[]) =>
    data.reduce(
      (insects: Insect[], insectData: Insect) => [
        ...insects,
        {
          entryId: insectData.id,
          name: insectData.name && capitalizeAllWords(insectData.name),
          iconImage: insectData.iconimage,
          critterpediaImage: insectData.critterpediaimage,
          furnitureImage: insectData.furnitureimage,
          size: insectData.size,
          sellingPrice: insectData.sell,
          catchingLocation: insectData.wherehow,
          weather: insectData.weather,
          totalCatchesToUnlock: insectData.totalcatchestounlock,
          spawnRates: insectData.spawnrates,
          availability: {
            north: {
              jan: insectData.nhjan,
              feb: insectData.nhfeb,
              mar: insectData.nhmar,
              apr: insectData.nhapr,
              may: insectData.nhmay,
              jun: insectData.nhjun,
              jul: insectData.nhjul,
              aug: insectData.nhaug,
              sep: insectData.nhsep,
              oct: insectData.nhoct,
              nov: insectData.nhnov,
              dec: insectData.nhdec,
            },
            south: {
              jan: insectData.shjan,
              feb: insectData.shfeb,
              mar: insectData.shmar,
              apr: insectData.shapr,
              may: insectData.shmay,
              jun: insectData.shjun,
              jul: insectData.shjul,
              aug: insectData.shaug,
              sep: insectData.shsep,
              oct: insectData.shoct,
              nov: insectData.shnov,
              dec: insectData.shdec,
            },
          },
          color: [insectData.color1, insectData.color2],
        },
      ],
      [],
    );

  public async allInsects() {
    const insectsArray = await this.dbConnector.getInsects();
    return this.toGqlInsectSchema(insectsArray);
  }

  public async critterpedia() {
    return {
      allInsects: await this.allInsects(),
    };
  }
}
