import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { WithErrorApiViewProps } from "src/hoc-helpers/with-error-api";
import { ICharacters } from "src/models/character";
import {
  SWAPI_CHARACTERS,
  SWAPI_CHARACTERS_PAGE_KEY,
  SWAPI_CHARACTERS_SEARCH_KEY,
} from "src/services/api/constants";
import { ISwapiCharactersResponse } from "src/services/api/models";
import { getApiResponse } from "src/utils/get-api-response";
import {
  getCharacterId,
  getCharacterImage,
} from "src/utils/get-character-data";

interface UseCharactersProps extends WithErrorApiViewProps {
  page?: number;
  setMaxPage?: Dispatch<SetStateAction<number>>;

  search?: string;

  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function useCharacters({
  setErrorApi,
  page,
  setMaxPage,
  search,
  setLoading,
}: UseCharactersProps): {
  characters: ICharacters | null;
} {
  const [characters, setCharacters] = useState<ICharacters | null>(null);

  useEffect(() => {
    (async () => {
      let request = SWAPI_CHARACTERS;
      if (page || search) {
        request += "/?";
        if (page) {
          request += `${SWAPI_CHARACTERS_PAGE_KEY}=${page}&`;
        }
        if (search) {
          request += `${SWAPI_CHARACTERS_SEARCH_KEY}=${search}`;
        }
      }

      setLoading(true);
      const body = await getApiResponse<ISwapiCharactersResponse>(request);
      if (body) {
        setCharacters(
          body.results.map(({ name, url }) => {
            const id = getCharacterId(url);
            return { name, id, img: getCharacterImage(id) };
          })
        );

        setMaxPage?.(Math.ceil(body.count / 10));

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
      setLoading(false);
    })();
  }, [setErrorApi, page, setMaxPage, search, setLoading]);

  return { characters };
}
