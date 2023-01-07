import React, { useEffect, useRef } from "react";
import cn from "classnames";

import "src/components/ui/styles/ui-global.scss";
import styles from "./styles.module.scss";

export interface UiInputProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  classes?: string;
  playbackRate?: number;
}

const UiVideo: React.FC<UiInputProps> = ({
  src,
  classes,
  playbackRate = 1,
  ...restProps
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current!.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      className={cn(styles.video, classes)}
      loop
      autoPlay
      muted
      {...restProps}
    >
      <source src={src} />
    </video>
  );
};

export default UiVideo;
