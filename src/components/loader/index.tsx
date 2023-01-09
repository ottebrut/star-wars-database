import React from "react";
import cn from "classnames";

import UiLoader from "src/components/ui/ui-loader";

import styles from "./styles.module.scss";

interface LoaderProps {
  loading: boolean;
  minHeight?: string;
  children: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ loading, children, minHeight }) => {
  return (
    <div className={styles.wrapper} style={{ minHeight: minHeight || "auto" }}>
      <div className={cn(styles.content, loading && styles.content_loading)}>
        {children}
      </div>
      {loading && (
        <div className={styles.loader}>
          <UiLoader />
        </div>
      )}
    </div>
  );
};

export default Loader;
