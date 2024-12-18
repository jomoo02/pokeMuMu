import React from 'react';

interface HeaderProps {
  text: string;
}

export default function Header({
  text = '',
}: HeaderProps) {
  return (
    <h2 className="text-2xl font-semibold py-[3px] md:py-1 my-1 text-slate-700">
      {text}
    </h2>
  );
}
