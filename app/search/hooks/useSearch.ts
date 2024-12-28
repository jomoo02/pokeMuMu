import useDebouncedInput from '@/app/hooks/useDebouncedInput';
import { useRouter } from 'next/navigation';
import useLockBodyScroll from '@/app/hooks/useLockBodyScroll';
import useEscKeyListener from '@/app/hooks/useEscKeyListener';
import useLocalPoke from './useLocalPoke';
import useSearchPoke from './useSearchPoke';
import { checkEmptyText } from '../utils/input-type';

export default function useSearch() {
  useLockBodyScroll();

  const {
    inputText,
    handleInputTextChange,
  } = useDebouncedInput();

  const router = useRouter();
  const closeSearch = () => router.back();

  useEscKeyListener(closeSearch);

  const isEmptyInputText = checkEmptyText(inputText);

  const {
    searchPokeList,
    status: searchStatus,
  } = useSearchPoke(inputText, 300);

  const {
    localPokeList,
    status: localStatus,
  } = useLocalPoke();

  const loading = searchStatus === 'fetching' || localStatus === 'init';

  const searchResult = isEmptyInputText && localStatus !== 'init' ? localPokeList : searchPokeList;

  const status = isEmptyInputText ? localStatus : searchStatus;

  return {
    loading,
    inputText,
    handleInputTextChange,
    searchResult,
    localStatus,
    isEmptyInputText,
    status,
    closeSearch,
  };
}
