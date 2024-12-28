import { formatPokedexNumber } from '@/app/utils/pokedex-number';
import { getHomePokeSpriteSrc } from '@/app/utils/sprite';
import type { PokedexPoke } from '@/app/models/pokev4.type';

function getPokeInfo(poke: PokedexPoke) {
  const noFormTextCase = '기본 모습';
  const defaultName = '포켓몬';
  const defaultNameEn = 'name';

  const {
    name,
    no,
    form,
    sprite,
    pokeKey,
    types,
  } = poke;

  const { ko, en } = name;
  const formText = form === noFormTextCase ? '' : form;
  const formattedNo = formatPokedexNumber(no);
  const src = getHomePokeSpriteSrc(sprite);

  return {
    pokeKey,
    types,
    src,
    nameKo: ko || defaultName,
    nameEn: en || defaultNameEn,
    form: formText,
    no: formattedNo,
  };
}

export {
  getPokeInfo,
};
