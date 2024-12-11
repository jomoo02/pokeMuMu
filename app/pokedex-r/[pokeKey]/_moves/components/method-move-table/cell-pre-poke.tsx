import React, { useState } from 'react';
import Image from 'next/image';
import type { Move } from '@/app/models/detail.type';

interface PrePokeProps {
  preIds: number[];
}

interface CellPrePokeProps {
  move: Move;
}

function PrePoke({
  preIds,
}: PrePokeProps) {
  const sprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons';
  const alterSprityUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  const preIdsSet = new Set(preIds);

  const initialImageUrls = [...preIdsSet].map((id) => ({
    id,
    src: `${sprityUrl}/${id}.png`,
    fallback: `${alterSprityUrl}/${id}.png`,
  }));

  const [imageUrls, setImageUrls] = useState(initialImageUrls);

  const handleImageError = (index: number) => {
    setImageUrls((preImageUrls) => {
      const newImageUrls = [...preImageUrls];

      newImageUrls[index] = {
        ...newImageUrls[index],
        src: newImageUrls[index].fallback,
      };

      return newImageUrls;
    });
  };

  return (
    <div className="flex cell-pre-poke items-center">
      {imageUrls.map(({ id, src }, index) => (
        <Image
          key={id}
          src={src}
          alt={`${id}`}
          width={35}
          height={25}
          style={{ width: 35, height: 25 }}
          onError={() => handleImageError(index)}
        />
      ))}
    </div>
  );
}

export default function CellPrePoke({
  move,
}: CellPrePokeProps) {
  if (!move.preIds || move.preIds.length === 0) {
    return null;
  }

  return (
    <PrePoke
      key="pre-poke"
      preIds={move.preIds}
    />
  );
}
