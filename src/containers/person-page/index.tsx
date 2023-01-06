import React from "react";
import { useParams } from "react-router-dom";

import PersonFilms from "src/containers/person-page/person-films";
import PersonInfo from "src/containers/person-page/person-info";
import PersonLinkBack from "src/containers/person-page/person-link-back";
import PersonPhoto from "src/containers/person-page/person-photo";
import usePersonData from "src/containers/person-page/use-person-data";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";
import { getPersonImage } from "src/utils/get-person-data";

import styles from "./styles.module.scss";

interface PersonPageProps extends WithErrorApiViewProps {}

const PersonPage: React.FC<PersonPageProps> = ({ setErrorApi }) => {
  const { id } = useParams();
  const personImageSrc = getPersonImage(id!);
  const { personInfo, personName, personFilms } = usePersonData({
    id: id!,
    setErrorApi,
  });

  return (
    <>
      <PersonLinkBack />

      <div className={styles.person}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles["person__data-container"]}>
          <PersonPhoto src={personImageSrc} />
          {personInfo && <PersonInfo info={personInfo} />}
          {personFilms && <PersonFilms filmsUrls={personFilms} />}
        </div>
      </div>
    </>
  );
};

export default withErrorApi(PersonPage);
