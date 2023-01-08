import { useEffect, useState } from "react";

import { ICharacterInfo } from "src/containers/character-page/models";
import { WithErrorApiViewProps } from "src/hoc-helpers/with-error-api";
import { SWAPI_CHARACTER } from "src/services/api/constants";
import { ISwapiCharacterResponse } from "src/services/api/models";
import { getApiResponse } from "src/utils/get-api-response";

interface UsePersonDataProps extends WithErrorApiViewProps {
  id: string;
}

export default function useCharacterData({
  id,
  setErrorApi,
}: UsePersonDataProps): {
  characterInfo: ICharacterInfo | null;
  characterName: string | null;
  characterFilms: string[] | null;
} {
  const [characterInfo, setCharacterInfo] = useState<ICharacterInfo | null>(
    null
  );
  const [characterName, setCharacterName] = useState<string | null>(null);
  const [characterFilms, setCharacterFilms] = useState<string[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getApiResponse<ISwapiCharacterResponse>(
        SWAPI_CHARACTER(id!)
      );
      if (res) {
        setCharacterInfo([
          { label: "Height", data: res.height },
          { label: "Width", data: res.width },
          { label: "Hair Color", data: res.hair_color },
          { label: "Skin Color", data: res.skin_color },
          { label: "Eye Color", data: res.eye_color },
          { label: "Birth Year", data: res.birth_year },
          { label: "Gender", data: res.gender },
        ]);
        setCharacterName(res.name);
        if (res.films.length) {
          setCharacterFilms(res.films);
        }

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [id, setErrorApi]);

  return {
    characterInfo,
    characterName,
    characterFilms,
  };
}
