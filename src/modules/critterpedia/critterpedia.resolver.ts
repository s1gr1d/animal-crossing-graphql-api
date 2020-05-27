import { Query, Resolver } from '@nestjs/graphql';
import { CritterpediaService } from './critterpedia.service';
import { CritterpediaModel } from './models/critterpedia.model';

@Resolver(() => CritterpediaModel)
export class CritterpediaResolver {
  constructor(private readonly villagersService: CritterpediaService) {}

  @Query(() => CritterpediaModel)
  async critterpedia() {
    return await this.villagersService.critterpedia();
  }
}
