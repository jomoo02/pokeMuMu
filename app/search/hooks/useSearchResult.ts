import useLocalStorage from '@/app/hooks/useLocalStorage';
import { PokedexPoke } from '@/app/models/pokev4.type';

export default function useSearchResult(
  inputText: string,
  result: PokedexPoke[] | [],
) {
  const { localPokeList } = useLocalStorage();

  const pokeList = !inputText ? localPokeList : result;

  return {
    pokeList,
  };
}
