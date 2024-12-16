import {
  POKEDEX_INDEX,
  POKEDEX_LIST,
  NATIONAL,
} from '@/app/data/pokedex';
import type { PokedexNumber } from '@/app/models/pokev4.type';
import { formatPokedexNumber } from '@/app/utils/pokedex-number';

type LocalNo = {
  index: number;
  entryNumber: string;
  pokedex: string;
};

function setLocalNoObj(entryNumber: number, index: number, pokedex: string) {
  const formattedEntryNumber = formatPokedexNumber(entryNumber);

  return {
    index,
    pokedex,
    entryNumber: formattedEntryNumber,
  };
}

function classifyPokedexNumber(pokedexNumberList: PokedexNumber[]) {
  const nationalPokedex = pokedexNumberList.find(({ pokedex }) => pokedex === NATIONAL);

  const nationalNo = formatPokedexNumber(nationalPokedex?.entryNumber || 0);

  const localPokedexList = pokedexNumberList
    .filter(({ pokedex }) => pokedex !== NATIONAL)
    .reduce((acc: LocalNo[], { pokedex, entryNumber }) => {
      const pokedexIndex = POKEDEX_INDEX[pokedex];
      const localPokedex = POKEDEX_LIST[pokedex];

      if (localPokedex) {
        const localNoObj = setLocalNoObj(entryNumber, pokedexIndex, localPokedex);
        acc.push(localNoObj);
      }

      if (pokedexIndex === 2) {
        const changedPokedex = 'updated-kanto';
        const localNoObj = setLocalNoObj(
          entryNumber,
          POKEDEX_INDEX[changedPokedex],
          POKEDEX_LIST[changedPokedex],
        );

        acc.push(localNoObj);
      }
      return acc;
    }, [])
    .sort((a, b) => a.index - b.index);

  return {
    nationalNo,
    localNoList: localPokedexList,
  };
}

export {
  classifyPokedexNumber,
};
