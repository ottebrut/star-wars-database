import { useCallback, useEffect, useState } from "react";

import { GUIDE_PERSON_IMG, SWAPI_PEOPLE } from "src/constants/api";
import { People, PeopleApiResponse } from "src/containers/people-page/models";
import { getApiResponse } from "src/utils/network";

export default function usePeople(): {
  people: People | null;
} {
  const [people, setPeople] = useState<People | null>(null);

  const getPeopleData = useCallback(async () => {
    const body = await getApiResponse<PeopleApiResponse>(SWAPI_PEOPLE);
    if (body) {
      setPeople(
        body.results.map(({ name, url }) => {
          const id = getPersonId(url);
          return { name, id, img: getPersonImage(id) };
        })
      );
    }
  }, []);

  useEffect(() => {
    getPeopleData();
  }, [getPeopleData]);

  return { people };
}

export function getPersonId(personUrl: string): string {
  return personUrl.replace(SWAPI_PEOPLE, "").replace(/\//g, "");
}

export function getPersonImage(personId: string): string {
  return GUIDE_PERSON_IMG(personId);
}
