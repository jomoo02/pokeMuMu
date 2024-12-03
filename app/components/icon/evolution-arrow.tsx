import React from 'react';
import {
  IconArrowRight,
  IconArrowDown,
} from '@tabler/icons-react';

interface EvolutionArrowIconProps {
  maxWidth: number
}

export default function EvolutionArrowIcon({
  maxWidth = 1,
}: EvolutionArrowIconProps) {
  const color = '#64748b';
  const rightSize = '1.75rem';
  const downSize = '1.5rem';

  if (maxWidth === 8) {
    return (
      <>
        <IconArrowDown size={rightSize} color={color} className="hidden md:block" />
        <IconArrowDown size={downSize} color={color} className="md:hidden" />
      </>
    );
  }

  return (
    <>
      <IconArrowRight size={rightSize} color={color} className="hidden md:block" />
      <IconArrowDown size={downSize} color={color} className="md:hidden" />
    </>
  );
}
