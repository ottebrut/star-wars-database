import React, { useState } from "react";
import cn from "classnames";

import crossIcon from "./images/cross.svg";
import "src/components/ui/styles/ui-global.scss";
import styles from "./styles.module.scss";

export interface UiInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  classes?: string;
}

const UiInput: React.FC<UiInputProps> = ({
  classes,
  value,
  onChange,
  ...restProps
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    onChange?.(event);
  };

  return (
    <div className={cn(styles.wrapper, classes)}>
      <input
        className={styles.input}
        value={inputValue}
        onChange={onInputChange}
        {...restProps}
      />
      <button onClick={() => setInputValue("")}>
        <img
          src={crossIcon}
          className={cn(styles.clear, !inputValue && styles.clear_disabled)}
          alt="Cross"
        />
      </button>
    </div>
  );
};

export default UiInput;
