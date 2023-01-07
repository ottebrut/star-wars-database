import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

import UiLoader from "src/components/ui/ui-loader";
import PersonInfo from "src/containers/person-page/person-info";
import PersonLinkBack from "src/containers/person-page/person-link-back";
import PersonPhoto from "src/containers/person-page/person-photo";
import usePersonData from "src/containers/person-page/use-person-data";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";
import { IPerson } from "src/models/person";
import { getPersonImage } from "src/utils/get-person-data";

import styles from "./styles.module.scss";

const PersonFilms = React.lazy(
  () => import("src/containers/person-page/person-films")
);

interface PersonPageProps extends WithErrorApiViewProps {}

const PersonPage: React.FC<PersonPageProps> = ({ setErrorApi }) => {
  const { id } = useParams();
  const personId = id!;
  const { personInfo, personName, personFilms } = usePersonData({
    id: personId,
    setErrorApi,
  });
  const person: IPerson | null = personName
    ? {
        name: personName,
        id: personId,
        img: getPersonImage(personId),
      }
    : null;

  return (
    <>
      <PersonLinkBack />

      {person && (
        <div className={styles.person}>
          <span className={styles.person__name}>{personName}</span>

          <div className={styles["person__data-container"]}>
            <PersonPhoto person={person} />
            {personInfo && <PersonInfo info={personInfo} />}
            {personFilms && (
              <Suspense fallback={<UiLoader />}>
                <PersonFilms filmsUrls={personFilms} />
              </Suspense>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default withErrorApi(PersonPage);
