// swapi
const SWAPI_ROOT = "https://swapi.dev/api";

export const SWAPI_CHARACTERS = `${SWAPI_ROOT}/people`;

export const SWAPI_CHARACTER_PAGE = (page = 1) =>
  `${SWAPI_CHARACTERS}/?page=${page}`;
export const SWAPI_CHARACTER = (id: string) => `${SWAPI_CHARACTERS}/${id}`;
export const SWAPI_CHARACTER_PEOPLE = (value: string) =>
  `${SWAPI_CHARACTERS}/?search=${value}`;

// visualguide
const GUIDE_ROOT = "https://starwars-visualguide.com/";

export const GUIDE_CHARACTER_IMG = (id: string) =>
  `${GUIDE_ROOT}/assets/img/characters/${id}.jpg`;
