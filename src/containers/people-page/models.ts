export interface PeopleApiResponse {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

export interface Person {
  name: string;
  id: string;
  img: string;
}

export type People = Person[];
