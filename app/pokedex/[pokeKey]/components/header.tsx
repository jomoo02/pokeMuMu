import React from 'react';

interface HeaderProps {
  text: string;
}

export default function Header({
  text = '',
}: HeaderProps) {
  return (
    <div className="rounded-t-md bg-blue-200">
      <h2 className="text-white text-center font-semibold py-[3px] md:py-1 text-sm lg:text-base">
        {text}
      </h2>
    </div>
  );
}
