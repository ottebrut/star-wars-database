import { GUIDE_PERSON_IMG, SWAPI_PEOPLE } from "src/constants/api";

export function getPersonId(personUrl: string): string {
  return personUrl.replace(SWAPI_PEOPLE, "").replace(/\//g, "");
}

export function getPersonImage(personId: string): string {
  return GUIDE_PERSON_IMG(personId);
}
