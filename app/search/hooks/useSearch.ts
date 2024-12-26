import useDebouncedInput from '@/app/hooks/useDebouncedInput';
import { useRouter } from 'next/navigation';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import useEscKeyListener from '@/app/hooks/useEscKeyListener';
import useLocalPoke from './useLocalPoke';
import useSearchPoke from './useSearchPoke';
import { containsKorean } from '../utils/input-type';

export default function useSearch() {
  useLockBodyScroll();

  const {
    inputText,
    handleInputTextChange,
  } = useDebouncedInput();

  const router = useRouter();
  const closeSearch = () => router.back();

  useEscKeyListener(closeSearch);

  const noSpaceInputText = containsKorean(inputText) ? inputText.replace(/\s/g, '') : inputText.trim();

  const {
    result: localPokeList,
    loading: localLoading,
  } = useLocalPoke();
  const {
    result: searchResult,
    loading: searchLoading,
  } = useSearchPoke(noSpaceInputText, 500);

  const loading = localLoading || searchLoading;
  const result = noSpaceInputText ? searchResult : localPokeList;

  return {
    loading,
    inputText,
    noSpaceInputText,
    closeSearch,
    handleInputTextChange,
    searchResult: result,
  };
}
