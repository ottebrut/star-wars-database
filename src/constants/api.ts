// swapi
const SWAPI_ROOT = "https://swapi.dev/api";

export const SWAPI_PEOPLE = `${SWAPI_ROOT}/people`;

export const SWAPI_PEOPLE_PAGE = (page = 1) => `${SWAPI_PEOPLE}/?page=${page}`;
export const SWAPI_PERSON = (id: string) => `${SWAPI_PEOPLE}/${id}`;

// visualguide
const GUIDE_ROOT = "https://starwars-visualguide.com/";

export const GUIDE_PERSON_IMG = (id: string) =>
  `${GUIDE_ROOT}/assets/img/characters/${id}.jpg`;
