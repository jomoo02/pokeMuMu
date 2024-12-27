import React from 'react';
import {
  isIntegerInputText,
  getPokeNameDirectionParticle,
} from '../lib/search-result';

interface SearchDescriptionProps {
  inputText: string;
  noSpaceInputText: string;
}

export default function SearchDescription({
  inputText,
  noSpaceInputText,
}: SearchDescriptionProps) {
  if (!noSpaceInputText) {
    return <span className="text-slate-600">최근 검색한 포켓몬</span>;
  }

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
