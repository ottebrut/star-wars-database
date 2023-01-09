import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import CharactersListBig from "src/components/characters-list-big";
import Loader from "src/components/loader";
import CharactersNavigation from "src/containers/characters-page/characters-navigation";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";
import useCharacters from "src/hooks/use-characters";

const CharactersPage: React.FC<WithErrorApiViewProps> = ({ setErrorApi }) => {
  const queryPage = useSearchParams()[0].get("page");
  const page = queryPage ? parseInt(queryPage) : 1;
  const [maxPage, setMaxPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { characters } = useCharacters({
    setErrorApi,
    page,
    setMaxPage,
    setLoading,
  });

  return (
    <>
      <CharactersNavigation page={page} maxPage={maxPage} />
      <Loader loading={loading} minHeight="500px">
        {characters && <CharactersListBig characters={characters} />}
      </Loader>
    </>
  );
};

export default withErrorApi(CharactersPage);
