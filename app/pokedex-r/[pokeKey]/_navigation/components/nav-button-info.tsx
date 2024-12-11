import React from 'react';
import Image from 'next/image';
import { formatPokedexNumber } from '@/app/utils/pokedex-number';
import type { Poke } from '@/app/models/poke.type';
import { setFormText } from '../lib/nav-button-info';

interface NavButtonInfoProps {
  poke: Poke;
}

export default function NavButtonInfo({
  poke,
}: NavButtonInfoProps) {
  const {
    // sprite,
    no,
    name,
    form,
  } = poke;

  const formattedNo = formatPokedexNumber(no);

  const formText = setFormText(form);

  // const src = `https://raw.githubusercontent.com/jomoo02/poke_sprites/refs/heads/main/home/${sprite}.png`;

  return (
    <div className="flex justify-center gap-x-3">
      {/* <div className="w-9 h-9 relative">
        <Image
          placeholder="blur"
          blurDataURL="/pokeball.svg"
          src={src}
          alt={name.en}
          fill
          sizes="48px"
          style={{
            objectFit: 'contain',
          }}
          priority
        />
      </div> */}
      <div className="flex flex-col justify-center items-center text-sm py-1 font-semibold">
        <div className="flex gap-x-1.5 items-center">
          <span className="capitalize text-slate-500 text-sm">
            {`#${formattedNo}`}
          </span>
          <span className="text-center text-slate-600/90 text-[15px]">
            {name.ko}
          </span>
        </div>
        {/* {formText && (
          <span className="text-slate-600 text-xs leading-3">
            {formText}
          </span>
        )} */}
      </div>
    </div>
  );
}
