import useLocalStorage from '@/app/hooks/useLocalStorage';
import useScrollRestoration from '@/app/hooks/useScrollRestoration';
import type { Poke } from '@/app/models/poke.type';

export default function usePokeCard(poke: Poke) {
  const name = poke.name.ko;

  const form = poke.form === '기본 모습' ? '' : poke.form;

  const { saveLocalPoke } = useLocalStorage();

  const { setScrollPosition } = useScrollRestoration();

  const handlePokeCardClick = () => {
    saveLocalPoke(poke);
    setScrollPosition(window.scrollY);
  };

  return {
    ...poke,
    name,
    form,
    handlePokeCardClick,
  };
}
