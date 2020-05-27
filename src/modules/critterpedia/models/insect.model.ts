import { Field, ObjectType } from '@nestjs/graphql';
import { HemisphereAvailabilityModel } from './hemisphereAvailability.model';

@ObjectType()
export class InsectModel {
  @Field(() => Number, { nullable: true })
  entryId?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  iconImage?: string;

  @Field({ nullable: true })
  critterpediaImage?: string;

  @Field({ nullable: true })
  furnitureImage?: string;

  @Field({ nullable: true })
  size?: string;

  @Field({ nullable: true })
  sellingPrice?: number;

  @Field({ nullable: true })
  catchingLocation?: string;

  @Field({ nullable: true })
  weather?: string;

  @Field(() => Number, { nullable: true })
  totalCatchesToUnlock?: number;

  @Field({ nullable: true })
  spawnRates?: string;

  @Field(() => HemisphereAvailabilityModel, { nullable: true })
  availability?: HemisphereAvailabilityModel;

  @Field(() => [String], { nullable: true })
  color?: string[];
}
