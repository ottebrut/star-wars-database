import { IPerson } from "src/models/person";

export interface IPeopleApiResponse {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

export type IPeople = IPerson[];
