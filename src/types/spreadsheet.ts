export type SpreadsheetResponse = {
  range: string;
  majorDimension?: string;
  values: string[][];
};

export type SpreadsheetObj = {
  [key: string]: string;
};

export enum SheetName {
  HOUSEWARES = 'Housewares',
  MISCELLANEOUS = 'Miscellaneous',
  WALL_MOUNTED = 'Wall-mounted',
  WALLPAPER = 'Wallpaper',
  FLOORS = 'Floors',
  RUGS = 'Rugs',
  PHOTO = 'Photos',
  POSTERS = 'Posters',
  TOOLS = 'Tools',
  BOTTOMS = 'Bottoms',
  DRESS_UP = 'Dress-Up',
  HEADWEAR = 'Headwear',
  ACCESSORIES = 'Accessories',
  SOCKS = 'Socks',
  SHOES = 'Shoes',
  BAGS = 'Bags',
  UMBRELLAS = 'Umbrellas',
  MUSIC = 'Music',
  RECIPES = 'Recipes',
  INSECTS = 'Insects',
  FISH = 'Fish',
  FOSSILS = 'Fossils',
  ART = 'Art',
  OTHER = 'Other',
  CONSTRUCTION = 'Construction',
  ACHIEVEMENTS = 'Achievements',
  VILLAGERS = 'Villagers',
  REACTIONS = 'Reactions',
}
