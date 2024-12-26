'use client';

import React from 'react';
import useSearch from '../hooks/useSearch';
import SearchResult from './search-result';
import SearchInput from './search-input';

export default function Search() {
  const {
    loading,
    inputText,
    noSpaceInputText,
    closeSearch,
    handleInputTextChange,
    searchResult,
  } = useSearch();

  return (
    <div className="flex flex-col bg-white h-full lg:border lg:border-zinc-400/80 lg:rounded-xl py-0.5 lg:shadow-lg">
      <SearchInput
        inputTextOnChange={handleInputTextChange}
        closeSearch={closeSearch}
      />
      <div className="h-[calc(100dvh-2.3rem)] flex-1 overflow-y-auto">
        <SearchResult
          loading={loading}
          inputText={inputText}
          noSpaceInputText={noSpaceInputText}
          searchResult={searchResult}
        />
      </div>
    </div>
  );
}
