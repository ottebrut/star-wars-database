export interface ISwapiCharactersResponse {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

export interface ISwapiCharacterResponse {
  height: string;
  width: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  name: string;
  films: string[];
}
