import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VillagerModel {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  house?: string;

  @Field({ nullable: true })
  species?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  personality?: string;

  @Field({ nullable: true })
  hobby?: string;

  @Field({ nullable: true })
  birthdayString?: string;

  @Field({ nullable: true })
  catchphrase?: string;

  @Field({ nullable: true })
  favSong?: string;

  @Field(() => [String], { nullable: true })
  style?: string[];

  @Field(() => [String], { nullable: true })
  color?: string[];

  @Field({ nullable: true })
  wallpaper?: string;

  @Field({ nullable: true })
  flooring?: string;
}
