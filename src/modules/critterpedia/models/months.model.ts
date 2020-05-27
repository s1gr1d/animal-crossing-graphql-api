import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MonthsModel {
  @Field({ nullable: true })
  jan?: string;

  @Field({ nullable: true })
  feb?: string;

  @Field({ nullable: true })
  mar?: string;

  @Field({ nullable: true })
  apr?: string;

  @Field({ nullable: true })
  may?: string;

  @Field({ nullable: true })
  jun?: string;

  @Field({ nullable: true })
  jul?: string;

  @Field({ nullable: true })
  aug?: string;

  @Field({ nullable: true })
  sep?: string;

  @Field({ nullable: true })
  oct?: string;

  @Field({ nullable: true })
  nov?: string;

  @Field({ nullable: true })
  dec?: string;
}
