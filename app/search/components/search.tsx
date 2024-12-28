'use client';

import React from 'react';
import LoadingIcon from '@/app/components/icon/loading';
import useSearch from '../hooks/useSearch';
import SearchResult from './search-result';
import SearchInput from './search-input';
import SearchDescription from './search-description';

export default function Search() {
  const {
    inputText,
    handleInputTextChange,
    searchResult,
    status,
    loading,
    isEmptyInputText,
    closeSearch,
  } = useSearch();

  return (
    <div className="flex flex-col bg-white h-full lg:border lg:border-zinc-400/80 lg:rounded-xl py-0.5 lg:shadow-lg">
      <SearchInput
        inputTextOnChange={handleInputTextChange}
        closeSearch={closeSearch}
      />
      <div className="h-[calc(100dvh-2.3rem)] flex-1 overflow-y-auto">
        <div className="px-1.5 lg:px-2 py-1 border-b border-slate-300">
          <SearchDescription
            inputText={inputText}
            isEmptyInputText={isEmptyInputText}
          />
        </div>
        {loading ? (
          <div className="relative top-52 lg:top-36 w-full flex items-center justify-center">
            <div className="animate-spin">
              <LoadingIcon />
            </div>
          </div>
        ) : (
          <SearchResult
            isEmptyInputText={isEmptyInputText}
            searchResult={searchResult}
            status={status}
          />
        )}
      </div>
    </div>
  );
}
