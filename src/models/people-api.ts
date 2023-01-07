export interface IPeopleApiResponse {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}
