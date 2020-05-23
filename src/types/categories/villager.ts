type MalePersonality = 'Lazy' | 'Jock' | 'Cranky' | 'Smug';
type FemalePersonality = 'Normal' | 'Peppy' | 'Snooty' | 'Big Sister';
export type Personality = FemalePersonality & MalePersonality;

export type Gender = 'Female' | 'Male';

export type Villager = {
  name?: string;
  iconimage?: string;
  houseimage?: string;
  species?: string;
  gender?: Gender;
  personality?: Personality;
  hobby?: string;
  birthday?: string;
  catchphrase?: string;
  favoritesong?: string;
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
