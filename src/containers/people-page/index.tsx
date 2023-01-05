import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import PeopleList from "src/containers/people-page/people-list";
import PeopleNavigation from "src/containers/people-page/people-navigation";
import usePeople from "src/containers/people-page/use-people";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";

interface PeoplePageProps extends WithErrorApiViewProps {}

const PeoplePage: React.FC<PeoplePageProps> = ({ setErrorApi }) => {
  const [searchParams] = useSearchParams();
  const queryPage = searchParams.get("page");
  const page = queryPage ? parseInt(queryPage) : 1;
  const [maxPage, setMaxPage] = useState(1);

  const { people } = usePeople({
    setErrorApi,
    page,
    setMaxPage,
  });

  return (
    <>
      <PeopleNavigation page={page} maxPage={maxPage} />
      <PeopleList people={people} />
    </>
  );
};

export default withErrorApi(PeoplePage);
