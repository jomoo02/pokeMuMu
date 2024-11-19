import React from 'react';

interface PageProps {
  params: {
    pokeKey: string;
  };
}

export default async function Page({
  params,
}: PageProps) {
  const { pokeKey } = params;

  return (
    <div>
      {pokeKey}
    </div>
  );
}
