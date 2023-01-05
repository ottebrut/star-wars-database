import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  GUIDE_PERSON_IMG,
  SWAPI_PEOPLE,
  SWAPI_PEOPLE_PAGE,
} from "src/constants/api";
import { People, PeopleApiResponse } from "src/containers/people-page/models";
import { WithErrorApiViewProps } from "src/hoc-helpers/with-error-api";
import { getApiResponse } from "src/utils/network";

interface UsePeopleProps extends WithErrorApiViewProps {
  page: number;
  setMaxPage: Dispatch<SetStateAction<number>>;
}

export default function usePeople({
  setErrorApi,
  page,
  setMaxPage,
}: UsePeopleProps): {
  people: People | null;
} {
  const [people, setPeople] = useState<People | null>(null);

  const getPeopleData = useCallback(async () => {
    const body = await getApiResponse<PeopleApiResponse>(
      SWAPI_PEOPLE_PAGE(page)
    );
    if (body) {
      setPeople(
        body.results.map(({ name, url }) => {
          const id = getPersonId(url);
          return { name, id, img: getPersonImage(id) };
        })
      );
      setMaxPage(Math.ceil(body.count / 10));

      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }, [setErrorApi, page, setMaxPage]);

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
