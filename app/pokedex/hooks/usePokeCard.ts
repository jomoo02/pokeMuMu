import useLocalStorage from '@/app/hooks/useLocalStorage';
import useScrollRestoration from '@/app/hooks/useScrollRestoration';
import type { Poke } from '@/app/models/poke.type';
import { formatPokedexNumber } from '@/app/utils/pokedex-number';

export default function usePokeCard(poke: Poke) {
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
