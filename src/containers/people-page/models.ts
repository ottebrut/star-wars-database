export interface IPeopleApiResponse {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

export interface IPerson {
  name: string;
  id: string;
  img: string;
}

export type IPeople = IPerson[];
