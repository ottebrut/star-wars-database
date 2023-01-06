import React from "react";
import cn from "classnames";

import { Theme } from "src/models/theme";

import "src/components/ui/ui-vars.scss";
import styles from "./styles.module.scss";

export interface UiButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme;
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
