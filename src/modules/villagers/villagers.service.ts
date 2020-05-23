import { Injectable } from '@nestjs/common';
import { DbConnectorService } from '../db-connector/db-connector.service';
import { Villager } from '../../types/categories/villager';
import { capitalizeAllWords, formatBirthday } from '../../util/modifyData';

@Injectable()
export class VillagersService {
  constructor(private readonly dbConnector: DbConnectorService) {}

  private toGqlVillagerSchema = (data: Villager[]) =>
    data.reduce(
      (villagers: Villager[], villagerData: Villager) => [
        ...villagers,
        {
          name: villagerData.name,
          image: villagerData.iconimage,
          house: villagerData.houseimage,
          species: villagerData.species,
          gender: villagerData.gender,
          personality: villagerData.personality,
          hobby: villagerData.hobby,
          birthdayString:
            villagerData.birthday && formatBirthday(villagerData.birthday),
          catchphrase: villagerData.catchphrase,
          favSong: villagerData.favoritesong,
          style:
            villagerData.style1 === villagerData.style2
              ? [villagerData.style1]
              : [villagerData.style1, villagerData.style2],
          color: [villagerData.color1, villagerData.style2],
          wallpaper:
            villagerData.wallpaper &&
            capitalizeAllWords(villagerData.wallpaper),
          flooring:
            villagerData.flooring && capitalizeAllWords(villagerData.flooring),
        },
      ],
      [],
    );

  public async allVillagers() {
    const villagersArray = await this.dbConnector.getVillagers();
    return this.toGqlVillagerSchema(villagersArray);
  }
}
