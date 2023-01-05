import React from "react";

import PeopleList from "src/containers/people-page/people-list";
import usePeople from "src/containers/people-page/use-people";
import withErrorApi, {
  WithErrorApiViewProps,
} from "src/hoc-helpers/with-error-api";

interface PeoplePageProps extends WithErrorApiViewProps {}

const PeoplePage: React.FC<PeoplePageProps> = ({ setErrorApi }) => {
  const { people } = usePeople({ setErrorApi });

  return <PeopleList people={people} />;
};

export default withErrorApi(PeoplePage);
