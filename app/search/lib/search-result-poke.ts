import { formatPokedexNumber } from '@/app/utils/pokedex-number';
import { getHomePokeSpriteSrc } from '@/app/utils/sprite';
import type { PokedexPoke } from '@/app/models/pokev4.type';

function getPokeInfo(poke: PokedexPoke) {
  const {
    name,
    no,
    form,
    sprite,
    pokeKey,
    types,
  } = poke;

  const { ko, en } = name;
  const formText = form === '기본 모습' ? '' : form;
  const formattedNo = formatPokedexNumber(no);
  const src = getHomePokeSpriteSrc(sprite);

  return {
    pokeKey,
    types,
    src,
    nameKo: ko || '포켓몬',
    nameEn: en || 'name',
    form: formText,
    no: formattedNo,
  };
}

export {
  getPokeInfo,
};
