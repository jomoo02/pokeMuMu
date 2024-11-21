import {
  POKEDEX_INDEX,
  POKEDEX_LIST,
  NATIONAL,
} from '@/app/data/pokedex';
import type { PokedexNumber } from '@/app/models/poke.type';
import { formatPokedexNumber } from '@/app/utils/pokedex-number';

type LocalNo = {
  index: number;
  entryNumber: string;
  pokedex: string;
};

function classifyPokedexNumber(pokedexNumberList: PokedexNumber[]) {
  const nationalPokedex = pokedexNumberList.find(({ pokedex }) => pokedex === NATIONAL);

  const nationalNo = formatPokedexNumber(nationalPokedex?.entryNumber || 0);

  const localPokedexList = pokedexNumberList
    .filter(({ pokedex }) => pokedex !== NATIONAL)
    .reduce((acc: LocalNo[], { pokedex, entryNumber }) => {
      const pokedexIndex = POKEDEX_INDEX[pokedex];

      const localPokedex = POKEDEX_LIST[pokedex];

      const formattedEntryNumber = formatPokedexNumber(entryNumber);

      if (localPokedex) {
        acc.push({
          entryNumber: formattedEntryNumber,
          index: pokedexIndex,
          pokedex: localPokedex,
        });
      }

      if (pokedexIndex === 2) {
        const changedPokedex = 'updated-kanto';

        acc.push({
          entryNumber: formattedEntryNumber,
          index: POKEDEX_INDEX[changedPokedex],
          pokedex: POKEDEX_LIST[changedPokedex],
        });
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
