import React from 'react';
import HomeButton from './home-button';
import SearchIcon from '../icon/search';

export default function MainHeader() {
  return (
    <header className="z-[100] top-0 h-14 border-b border-slate-400 flex justify-between items-center px-2.5 xs:px-6 sm:px-8 md:px-12">
      <HomeButton />
      <SearchIcon size="1.5rem" />
    </header>
  );
}
