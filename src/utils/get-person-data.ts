import { GUIDE_PERSON_IMG } from "src/constants/api";

export function getPersonImage(personId: string): string {
  return GUIDE_PERSON_IMG(personId);
}
