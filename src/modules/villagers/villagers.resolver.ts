import { Query, Resolver } from '@nestjs/graphql';
import { VillagerModel } from './villager.model';
import { VillagersService } from './villagers.service';

@Resolver(() => VillagerModel)
export class VillagersResolver {
  constructor(private readonly villagersService: VillagersService) {}

  @Query(() => [VillagerModel])
  async allVillagers() {
    return await this.villagersService.allVillagers();
  }

  /*
  @Query(() => VillagerModel)
  async villagers(@Args('name', { type: () => Name }) name: string) {
    return await this.villagersService.getVillager(name);
  }
  */
}
