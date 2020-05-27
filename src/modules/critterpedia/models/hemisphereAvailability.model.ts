import { Field, ObjectType } from '@nestjs/graphql';
import { MonthsModel } from './months.model';

@ObjectType()
export class HemisphereAvailabilityModel {
  @Field(() => MonthsModel, { nullable: true })
  north?: MonthsModel;

  @Field(() => MonthsModel, { nullable: true })
  south?: MonthsModel;
}
