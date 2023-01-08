import React, { useCallback, useMemo, useState } from "react";
import { debounce } from "lodash";

import CharactersListSmall from "src/components/characters-list-small";
import UiInput from "src/components/ui/ui-input";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";
import { ICharacters } from "src/models/character";
import { SWAPI_CHARACTER_PEOPLE } from "src/services/api/constants";
import { ISwapiCharactersResponse } from "src/services/api/models";
import { getCharacterId, getCharacterImage } from "src/utils/get-person-data";
import { getApiResponse } from "src/utils/network";

import styles from "./styles.module.scss";

interface SearchPageProps extends WithErrorApiViewProps {}

const SearchPage: React.FC<SearchPageProps> = ({ setErrorApi }) => {
  const [characters, setCharacters] = useState<ICharacters>([]);

  const updateCharactersList = useCallback(
    async (searchValue: string) => {
      const res = await getApiResponse<ISwapiCharactersResponse>(
        SWAPI_CHARACTER_PEOPLE(searchValue)
      );

      if (res) {
        setCharacters(
          res.results.map(({ url, name }) => {
            const id = getCharacterId(url);
            return { name, id, img: getCharacterImage(id) };
          })
        );
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    },
    [setErrorApi]
  );
  const debouncedUpdateCharactersList = useMemo(
    () => debounce((searchValue) => updateCharactersList(searchValue), 300),
    [updateCharactersList]
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    debouncedUpdateCharactersList(searchValue);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>
      <UiInput
        classes={styles["input-search"]}
        type="text"
        onChange={handleInputChange}
        placeholder="Enter character's name"
      />
      <CharactersListSmall characters={characters} />
    </>
  );
};

export default withErrorApi(SearchPage);
