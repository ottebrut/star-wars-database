import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

import { SWAPI_PEOPLE, SWAPI_PEOPLE_PAGE } from "src/constants/api";
import { IPeople, IPeopleApiResponse } from "src/containers/people-page/models";
import { WithErrorApiViewProps } from "src/hoc-helpers/with-error-api";
import { getPersonImage } from "src/utils/get-person-data";
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
  people: IPeople | null;
} {
  const [people, setPeople] = useState<IPeople | null>(null);

  const getPeopleData = useCallback(async () => {
    const body = await getApiResponse<IPeopleApiResponse>(
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

function getPersonId(personUrl: string): string {
  return personUrl.replace(SWAPI_PEOPLE, "").replace(/\//g, "");
}
