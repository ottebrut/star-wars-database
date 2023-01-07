import { ITheme } from "src/models/theme";

const variables = ["header", "bgimage"];

export function updateCssVariables(theme: ITheme) {
  const root: HTMLDivElement = document.querySelector(":root")!;
  variables.forEach((variable) => {
    root.style.setProperty(
      `--theme-default-${variable}`,
      `var(--theme-${theme}-${variable})`
    );
  });
}
