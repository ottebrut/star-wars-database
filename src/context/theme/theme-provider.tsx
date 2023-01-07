import React, { useCallback, useContext, useMemo, useState } from "react";

import { updateCssVariables } from "src/context/theme/update-css-variables";
import { ITheme } from "src/models/theme";

interface IThemeContext {
  theme: ITheme;
  updateTheme: (_theme: ITheme) => void;
}

const ThemeContext = React.createContext<IThemeContext>({
  theme: "neutral",
  updateTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>("neutral");
  updateCssVariables(theme);

  const updateTheme = useCallback((theme: ITheme) => {
    setTheme(theme);
    updateCssVariables(theme);
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      updateTheme,
    }),
    [theme, updateTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
