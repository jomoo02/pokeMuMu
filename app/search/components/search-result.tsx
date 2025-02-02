import React from 'react';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import SearchResultPoke from './search-result-poke';

interface SearchResultProps {
  isEmptyInputText: boolean;
  searchResult: PokedexPoke[] | [];
  status: string;
}

export default function SearchResult({
  searchResult,
  isEmptyInputText,
  status,
}: SearchResultProps) {
  const noRecentSearchText = '최근 검색한 포켓몬이 없습니다';
  const noSearchResultText = '일치하는 포켓몬이 없습니다';
  const noPokeText = isEmptyInputText ? noRecentSearchText : noSearchResultText;

  return (
    <div>
      {status === 'empty' ? (
        <div className="px-1 lg:px-2 w-full relative top-52 lg:top-36 text-center text-base text-slate-600">
          {noPokeText}
        </div>
      ) : (
        <div className="divide-y divide-slate-300 border-b border-slate-300">
          {searchResult.map((poke) => (
            <div key={poke.order} className="h-[75px]">
              <SearchResultPoke poke={poke} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
