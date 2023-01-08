import {
  GUIDE_CHARACTER_IMG,
  SWAPI_CHARACTERS,
} from "src/services/api/constants";

export function getCharacterId(characterUrl: string): string {
  return characterUrl.replace(SWAPI_CHARACTERS, "").replace(/\//g, "");
}

export function getCharacterImage(characterId: string): string {
  return GUIDE_CHARACTER_IMG(characterId);
}
