import React from 'react';

interface InfoTitleProps {
  title: string;
}

export default function InfoTitle({
  title,
}: InfoTitleProps) {
  return (
    <h3 className="text-xl font-bold px-2.5 xl:px-1 py-2 sm:py-2.5 text-slate-800">
      {title}
    </h3>
  );
}
