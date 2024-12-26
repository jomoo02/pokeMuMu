import React from 'react';
import type { PokedexPoke } from '@/app/models/pokev4.type';
import LoadingIcon from '@/app/components/icon/loading';
import SearchResultPoke from './search-result-poke';
import {
  isIntegerInputText,
  getPokeNameDirectionParticle,
} from '../lib/search-result';

interface SearchResultDescriptionProps {
  inputText: string;
}

interface SearchResultProps extends SearchResultDescriptionProps {
  loading: boolean;
  noSpaceInputText: string;
  searchResult: PokedexPoke[] | [];
}

function SearchResultDescription({
  inputText,
}: SearchResultDescriptionProps) {
  const isInterger = isIntegerInputText(inputText);

  if (isInterger) {
    return (
      <>
        <span className="text-slate-600">도감 번호</span>
        <span className="underline mx-1 text-slate-700">{inputText}</span>
        <span className="text-slate-600">포켓몬</span>
      </>
    );
  }

  const directionParticle = getPokeNameDirectionParticle(inputText);

  return (
    <>
      <span className="underline text-slate-700">{inputText}</span>
      <span className="text-slate-600">{`${directionParticle} 검색한 포켓몬`}</span>
    </>
  );
}

export default function SearchResult({
  loading,
  inputText,
  searchResult,
  noSpaceInputText,
}: SearchResultProps) {
  if (loading) {
    return (
      <div className="h-full w-full justify-center items-center flex">
        <div className="animate-spin">
          <LoadingIcon />
        </div>
      </div>
    );
  }

  if (!noSpaceInputText) {
    return (
      <>
        <div className="px-1.5 lg:px-2 py-1">
          <span className="text-slate-600">최근 검색한 포켓몬</span>
        </div>
        {searchResult.length === 0 ? (
          <div className="px-1 lg:px-2 w-full relative top-20 text-center text-base text-slate-600">
            최근 검색한 포켓몬이 없습니다
          </div>
        ) : (
          <div className="divide-y divide-slate-300 border-y border-slate-300">
            {searchResult.map((poke) => (
              <div key={poke.order} className="h-[75px]">
                <SearchResultPoke poke={poke} />
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="px-1.5 lg:px-2 py-1">
        <SearchResultDescription inputText={inputText} />
      </div>
      {searchResult.length === 0 ? (
        <div className="px-1 lg:px-2 w-full relative top-20 text-center text-base text-slate-600">
          일치하는 포켓몬이 없습니다
        </div>
      ) : (
        <div className="divide-y divide-slate-300 border-y border-slate-300">
          {searchResult.map((poke) => (
            <div key={poke.order} className="h-[75px]">
              <SearchResultPoke poke={poke} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
