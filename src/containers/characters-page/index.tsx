import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import CharactersListBig from "src/components/characters-list-big";
import CharactersNavigation from "src/containers/characters-page/characters-navigation";
import useCharacters from "src/containers/characters-page/use-characters";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";

interface CharactersPageProps extends WithErrorApiViewProps {}

const CharactersPage: React.FC<CharactersPageProps> = ({ setErrorApi }) => {
  const queryPage = useSearchParams()[0].get("page");
  const page = queryPage ? parseInt(queryPage) : 1;
  const [maxPage, setMaxPage] = useState(1);

  const { characters } = useCharacters({
    setErrorApi,
    page,
    setMaxPage,
  });

  return (
    <>
      <CharactersNavigation page={page} maxPage={maxPage} />
      <CharactersListBig characters={characters} />
    </>
  );
};

export default withErrorApi(CharactersPage);
