import React, { useCallback, useMemo, useState } from "react";
import { debounce } from "lodash";

import CharactersListSmall from "src/components/characters-list-small";
import UiInput from "src/components/ui/ui-input";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";
import useCharacters from "src/hooks/use-characters";

import styles from "./styles.module.scss";

interface SearchPageProps extends WithErrorApiViewProps {}

const SearchPage: React.FC<SearchPageProps> = ({ setErrorApi }) => {
  const [searchValue, setSearchValue] = useState("");
  const { characters } = useCharacters({
    setErrorApi,
    search: searchValue,
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
      <CharactersListSmall characters={characters} />
    </>
  );
};

export default withErrorApi(SearchPage);
