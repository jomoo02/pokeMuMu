import React from 'react';
import Link from 'next/link';

export default function RootPage() {
  return (
    <div>
      <Link href="/pokedex" className="font-pretendard font-medium">
        포케덱스 링크
      </Link>
    </div>
  );
}
