// swapi
const SWAPI_ROOT = "https://swapi.dev/api";

export const SWAPI_CHARACTERS = `${SWAPI_ROOT}/people`;
export const SWAPI_CHARACTERS_PAGE_KEY = "page";
export const SWAPI_CHARACTERS_SEARCH_KEY = "search";
export const SWAPI_CHARACTER = (id: string) => `${SWAPI_CHARACTERS}/${id}`;

// visualguide
const GUIDE_ROOT = "https://starwars-visualguide.com/";

export const GUIDE_CHARACTER_IMG = (id: string) =>
  `${GUIDE_ROOT}/assets/img/characters/${id}.jpg`;
