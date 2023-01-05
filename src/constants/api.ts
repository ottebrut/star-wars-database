// swapi
const SWAPI_ROOT = "https://swapi.dev/api";

export const SWAPI_PEOPLE = `${SWAPI_ROOT}/people`;

// visualguide
const GUIDE_ROOT = "https://starwars-visualguide.com/";

export const GUIDE_PERSON_IMG = (id: string) =>
  `${GUIDE_ROOT}/assets/img/characters/${id}.jpg`;
