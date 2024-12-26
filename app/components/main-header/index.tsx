import React from 'react';
import Link from 'next/link';
import HomeButton from './home-button';
import SearchIcon from '../icon/search';

export default function MainHeader() {
  return (
    <header className="z-[100] top-0 h-14 border-b border-slate-300 flex justify-between items-center px-2.5 xs:px-6 sm:px-8 md:px-12">
      <HomeButton />
      <div>
        <Link
          href="/search"
          scroll={false}
        >
          <SearchIcon size="1.5rem" />
        </Link>
      </div>

    </header>
  );
}
