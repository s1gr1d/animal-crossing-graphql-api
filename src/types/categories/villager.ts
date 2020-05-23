import { Field } from '@nestjs/graphql';

export type Villager = {
  name?: string;
  iconimage?: string;
  houseimage?: string;
  species?: string;
  gender?: string;
  personality?: string;
  hobby?: string;
  birthday?: string;
  catchprase?: string;
  favourite_song?: string;
  style1?: string;
  style2?: string;
  color1?: string;
  color2?: string;
  wallpaper?: string;
  flooring?: string;
  furniturelist?: string;
  filename?: string;
  uniqueentryid?: string;
};
