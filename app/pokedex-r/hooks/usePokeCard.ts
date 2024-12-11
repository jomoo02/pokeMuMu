import useLocalStorage from '@/app/hooks/useLocalStorage';
import useScrollRestoration from '@/app/hooks/useScrollRestoration';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import { formatPokedexNumber } from '@/app/utils/pokedex-number';

export default function usePokeCard(poke: PokedexPoke) {
  const name = poke.name.ko;

  const form = poke.form === '기본 모습' ? '' : poke.form;

  const no = formatPokedexNumber(poke.no);

  const { saveLocalPoke } = useLocalStorage();

  const { setScrollPosition } = useScrollRestoration();

  const handlePokeCardClick = () => {
    saveLocalPoke(poke);
    setScrollPosition(window.scrollY);
  };

  return {
    ...poke,
    no,
    name,
    form,
    handlePokeCardClick,
  };
}
