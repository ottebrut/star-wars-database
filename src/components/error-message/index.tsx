import React from "react";

import UiVideo from "src/components/ui/ui-video";

import video from "./video/han-solo.mp4";
import styles from "./styles.module.scss";

const ErrorMessage: React.FC = () => {
  return (
    <>
      <p className={styles.text}>
        The dark side of the force has won.
        <br /> We cannot display data.
        <br /> Come back when we fix everything.
      </p>
      <UiVideo src={video} classes={styles.video} playbackRate={1.5} />
    </>
  );
};

export default ErrorMessage;
