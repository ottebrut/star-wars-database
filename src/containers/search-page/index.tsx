import React, { useCallback, useMemo, useState } from "react";
import { debounce } from "lodash";

import CharactersListSmall from "src/components/characters-list-small";
import Loader from "src/components/loader";
import UiInput from "src/components/ui/ui-input";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";
import useCharacters from "src/hooks/use-characters";

import styles from "./styles.module.scss";

const SearchPage: React.FC<WithErrorApiViewProps> = ({ setErrorApi }) => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { characters } = useCharacters({
    setErrorApi,
    search: searchValue,
    setLoading,
  });

  const updateSearchValue = useCallback(
    async (inputValue: string) => setSearchValue(inputValue),
    []
  );
  const debouncedUpdateSearchValue = useMemo(
    () => debounce((inputValue) => updateSearchValue(inputValue), 300),
    [updateSearchValue]
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    debouncedUpdateSearchValue(inputValue);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>
      <UiInput
        classes={styles["input-search"]}
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Enter character's name"
      />
      <Loader loading={loading} minHeight="100px">
        {characters && <CharactersListSmall characters={characters} />}
      </Loader>
    </>
  );
};

export default withErrorApi(SearchPage);
