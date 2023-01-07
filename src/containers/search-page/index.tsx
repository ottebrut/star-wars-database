import React, { useCallback, useMemo, useState } from "react";
import { debounce } from "lodash";

import UiInput from "src/components/ui/ui-input";
import { SWAPI_SEARCH_PEOPLE } from "src/constants/api";
import SearchPeopleList from "src/containers/search-page/search-people-list";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";
import { IPeople } from "src/models/people";
import { IPeopleApiResponse } from "src/models/people-api";
import { getPersonId, getPersonImage } from "src/utils/get-person-data";
import { getApiResponse } from "src/utils/network";

import styles from "./styles.module.scss";

interface SearchPageProps extends WithErrorApiViewProps {}

const SearchPage: React.FC<SearchPageProps> = ({ setErrorApi }) => {
  const [people, setPeople] = useState<IPeople>([]);

  const updateCharactersList = useCallback(
    async (searchValue: string) => {
      const res = await getApiResponse<IPeopleApiResponse>(
        SWAPI_SEARCH_PEOPLE(searchValue)
      );

      if (res) {
        setPeople(
          res.results.map(({ url, name }) => {
            const id = getPersonId(url);
            return { name, id, img: getPersonImage(id) };
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
      <SearchPeopleList people={people} />
    </>
  );
};

export default withErrorApi(SearchPage);