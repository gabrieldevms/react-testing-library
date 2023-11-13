export type AverageWeightType = {
  measurementUnit: string,
  value: string,
};

export type FoundAtType = {
  location: string,
  map: string,
};

export type PokemonType = {
  averageWeight: AverageWeightType,
  foundAt: FoundAtType[],
  id: number,
  image: string,
  moreInfo: string,
  name: string,
  summary: string,
  type: string,
};

export type FavoritePokemonIdsObjType = { [key: number]: boolean };
