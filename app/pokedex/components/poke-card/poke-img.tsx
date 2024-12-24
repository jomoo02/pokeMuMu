import React from 'react';
import Image from 'next/image';

interface PokeImgProps {
  src: string;
  alt: string;
}

export default function PokeImg({
  src,
  alt,
}: PokeImgProps) {
  return (
    <div className="w-[50px] h-[48px] xl:w-[58px] xl:h-[56px] relative">
      <Image
        placeholder="blur"
        blurDataURL="/pokeball.svg"
        src={src}
        alt={alt}
        fill
        sizes="48px"
        style={{
          objectFit: 'contain',
        }}
        priority={false}
      />
    </div>
  );
}
