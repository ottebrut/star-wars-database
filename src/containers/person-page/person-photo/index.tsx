import React from "react";

import styles from "./styles.module.scss";

interface PersonPhotoProps {
  src: string;
}

const PersonPhoto: React.FC<PersonPhotoProps> = ({ src }) => {
  return (
    <div className={styles.container}>
      <img src={src} className={styles.photo} alt="character portrait" />;
    </div>
  );
};

export default PersonPhoto;
