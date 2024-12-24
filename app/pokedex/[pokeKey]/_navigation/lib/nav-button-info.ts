import type { NavPoke } from '@/app/models/pokev4.type';
import { formatPokedexNumber } from '@/app/utils/pokedex-number';

function formatNavButtonInfo(navPoke: NavPoke) {
  const {
    no,
    speciesName,
  } = navPoke;

  return {
    no: formatPokedexNumber(no),
    name: speciesName.ko,
  };
}

export {
  formatNavButtonInfo,
};
