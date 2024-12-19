import React from 'react';

interface HeaderProps {
  text: string;
}

export default function Header({
  text = '',
}: HeaderProps) {
  return (
    <h2 className="text-2xl font-bold py-[3px] md:py-1 my-1.5 text-slate-800">
      {text}
    </h2>
  );
}
