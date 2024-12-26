import useLocalStorage from '@/app/hooks/useLocalStorage';
import type { PokedexPoke } from '@/app/models/pokev4.type';

export default function useSearchResultPoke(poke: PokedexPoke) {
  const { saveLocalPoke } = useLocalStorage();

  const saveResultPokeOnClick = () => {
    saveLocalPoke(poke);
  };

  const saveResultPokeOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      saveLocalPoke(poke);
    }
  };

  return {
    saveResultPokeOnClick,
    saveResultPokeOnEnter,
  };
}
