import React from "react";
import cn from "classnames";

import { ITheme } from "src/models/theme";

import "src/components/ui/styles/ui-global.scss";
import styles from "./styles.module.scss";

export interface UiButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ITheme;
}

const UiButton: React.FC<UiButtonProps> = ({
  children,
  theme = "dark",
  ...restProps
}) => {
  return (
    <button className={cn(styles.button, styles[theme])} {...restProps}>
      {children}
    </button>
  );
};

export default UiButton;
