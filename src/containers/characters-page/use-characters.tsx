import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { WithErrorApiViewProps } from "src/hoc-helpers/with-error-api";
import { ICharacters } from "src/models/character";
import { SWAPI_CHARACTER_PAGE } from "src/services/api/constants";
import { ISwapiCharactersResponse } from "src/services/api/models";
import { getCharacterId, getCharacterImage } from "src/utils/get-person-data";
import { getApiResponse } from "src/utils/network";

interface UseCharactersProps extends WithErrorApiViewProps {
  page: number;
  setMaxPage: Dispatch<SetStateAction<number>>;
}

export default function useCharacters({
  setErrorApi,
  page,
  setMaxPage,
}: UseCharactersProps): {
  characters: ICharacters | null;
} {
  const [characters, setCharacters] = useState<ICharacters | null>(null);

  useEffect(() => {
    (async () => {
      const body = await getApiResponse<ISwapiCharactersResponse>(
        SWAPI_CHARACTER_PAGE(page)
      );
      if (body) {
        setCharacters(
          body.results.map(({ name, url }) => {
            const id = getCharacterId(url);
            return { name, id, img: getCharacterImage(id) };
          })
        );
        setMaxPage(Math.ceil(body.count / 10));

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [setErrorApi, page, setMaxPage]);

  return { characters };
}
