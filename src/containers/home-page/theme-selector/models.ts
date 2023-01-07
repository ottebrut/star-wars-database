import { ITheme } from "src/models/theme";

export interface ThemeData {
  key: ITheme;
  img: string;
  text: string;
  classes?: string;
}
