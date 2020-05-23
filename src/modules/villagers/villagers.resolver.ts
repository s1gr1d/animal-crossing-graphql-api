import {  Query, Resolver } from '@nestjs/graphql';
import { VillagerModel } from './models/villager.model';

@Resolver(() => VillagerModel)
export class VillagersResolver {
  constructor(/*private readonly redditService: RedditService*/) {
  }

  @Query(() => [VillagerModel])
  async allVillagers() {
    //return this.redditService.findAllForUser(user);
    return [ {
      _id: 'gfdsdfgsdfg',
      name: '/r/reactjs-testData',
      description: 'sample description',
      icon: 'https://api.adorable.io/avatars/285/abott@adorable.png',
      answerCount: 6,
      active: false,
      answer: 'test Answer',
      keywords: ['first', 'hello', 'last'],
    }];
  }
}