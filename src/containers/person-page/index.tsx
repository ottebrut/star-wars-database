import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { SWAPI_PERSON } from "src/constants/api";
import {
  IPersonApiResponse,
  IPersonInfo,
} from "src/containers/person-page/models";
import PersonInfo from "src/containers/person-page/person-info";
import PersonPhoto from "src/containers/person-page/person-photo";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";
import { getPersonImage } from "src/utils/get-person-data";
import { getApiResponse } from "src/utils/network";

import styles from "./styles.module.scss";

interface PersonPageProps extends WithErrorApiViewProps {}

const PersonPage: React.FC<PersonPageProps> = ({ setErrorApi }) => {
  const { id } = useParams();
  const personImageSrc = getPersonImage(id!);

  const [personInfo, setPersonInfo] = useState<IPersonInfo | null>(null);
  const [personName, setPersonName] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getApiResponse<IPersonApiResponse>(SWAPI_PERSON(id!));
      if (res) {
        setPersonInfo([
          { label: "Height", data: res.height },
          { label: "Width", data: res.width },
          { label: "Hair Color", data: res.hair_color },
          { label: "Skin Color", data: res.skin_color },
          { label: "Eye Color", data: res.eye_color },
          { label: "Birth Year", data: res.birth_year },
          { label: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [id, setErrorApi]);

  return (
    <div className={styles.person}>
      <span className={styles.person__name}>{personName}</span>

      <div className={styles["person__data-container"]}>
        <PersonPhoto src={personImageSrc} />
        {personInfo && <PersonInfo personInfo={personInfo} />}
      </div>
    </div>
  );
};

export default withErrorApi(PersonPage);
