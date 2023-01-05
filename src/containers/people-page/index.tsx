import React from "react";

import PeopleList from "src/containers/people-page/people-list";
import usePeople from "src/containers/people-page/use-people";

const PeoplePage: React.FC = () => {
  const { people } = usePeople();

  return <PeopleList people={people} />;
};

export default PeoplePage;
