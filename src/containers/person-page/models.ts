export interface IPersonApiResponse {
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

export type IPersonInfo = {
  label: string;
  data: string | string[];
}[];
