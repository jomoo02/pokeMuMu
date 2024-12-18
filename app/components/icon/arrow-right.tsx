import React from 'react';
import { IconArrowBigRightFilled } from '@tabler/icons-react';

interface ArrowRightIconProps {
  size?: string;
  color?: string;
}

export default function ArrowRightIcon({
  size = '1rem',
  color = '#334155',
}: ArrowRightIconProps) {
  return <IconArrowBigRightFilled size={size} color={color} />;
}
