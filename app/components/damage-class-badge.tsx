import React from 'react';
import Image from 'next/image';
import {
  DEFAULT_DAMAGE_CLASS,
  type DamageClass,
} from '../data/damage-class';

interface DamageClassBadgeProps {
  damageClass: DamageClass;
}

export default function DamageClassBadge({
  damageClass = DEFAULT_DAMAGE_CLASS,
}: DamageClassBadgeProps) {
  const damageClassBadgeMap = {
    physical: {
      src: '/damageclass/physical.png',
      bgColor: 'bg-orange-400/90',
    },
    special: {
      src: '/damageclass/special.png',
      bgColor: 'bg-blue-400/90',
    },
    status: {
      src: '/damageclass/status.png',
      bgColor: 'bg-gray-400/90',
    },
  };

  const {
    src,
    bgColor,
  } = damageClassBadgeMap[damageClass];

  return (
    <div
      className={
        `${bgColor} w-[60px] xs:w-[63px] h-[24px] xs:h-[25px] rounded-[5px] border border-zinc-700/80 relative`
      }
    >
      <Image
        src={src}
        alt={damageClass}
        fill
        sizes="20px"
        priority
        style={{ objectFit: 'contain', padding: '2px 0' }}
      />
    </div>
  );
}
