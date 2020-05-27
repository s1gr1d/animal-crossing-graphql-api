import { Field, ObjectType } from '@nestjs/graphql';
import { InsectModel } from './insect.model';

@ObjectType()
export class CritterpediaModel {
  @Field(() => [InsectModel], { nullable: true })
  allInsects?: InsectModel[];
}
