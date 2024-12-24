import useLocalStorage from '@/app/hooks/useLocalStorage';
import useScrollRestoration from '@/app/hooks/useScrollRestoration';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import { formatPokedexNumber } from '@/app/utils/pokedex-number';
import { getHomePokeSpriteSrc } from '@/app/utils/sprite';

export default function usePokeCard(poke: PokedexPoke) {
  const {
    name,
    types,
    form,
    pokeKey,
    no,
    sprite,
    stats,
  } = poke;

  const nameKo = name.ko;

  const formattedForm = form === '기본 모습' ? '' : form;

  const formattedNo = formatPokedexNumber(no);

  const src = getHomePokeSpriteSrc(sprite);

  const { saveLocalPoke } = useLocalStorage();

  const { setScrollPosition } = useScrollRestoration();

  const handlePokeCardClick = () => {
    saveLocalPoke(poke);
    setScrollPosition(window.scrollY);
  };

  return {
    src,
    types,
    pokeKey,
    stats,
    no: formattedNo,
    name: nameKo,
    form: formattedForm,
    handlePokeCardClick,
  };
}
