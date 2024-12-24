'use client';

import React from 'react';
import Link from 'next/link';
import useScrollRestoration from '@/app/hooks/useScrollRestoration';

export default function HomeButton() {
  const { removeScrollPosition } = useScrollRestoration();

  return (
    <div className="text-slate-800  text-xl font-bold">
      <Link href="/" onClick={removeScrollPosition}>
        Poké MuMu
      </Link>
    </div>
  );
}
