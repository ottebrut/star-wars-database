import { useEffect, useState } from "react";

import { SWAPI_PERSON } from "src/constants/api";
import {
  IPersonApiResponse,
  IPersonInfo,
} from "src/containers/person-page/models";
import { WithErrorApiViewProps } from "src/hoc-helpers/with-error-api";
import { getApiResponse } from "src/utils/network";

interface UsePersonDataProps extends WithErrorApiViewProps {
  id: string;
}

export default function usePersonData({
  id,
  setErrorApi,
}: UsePersonDataProps): {
  personInfo: IPersonInfo | null;
  personName: string | null;
  personFilms: string[] | null;
} {
  const [personInfo, setPersonInfo] = useState<IPersonInfo | null>(null);
  const [personName, setPersonName] = useState<string | null>(null);
  const [personFilms, setPersonFilms] = useState<string[] | null>(null);

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
        if (res.films.length) {
          setPersonFilms(res.films);
        }

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [id, setErrorApi]);

  return {
    personInfo,
    personName,
    personFilms,
  };
}
