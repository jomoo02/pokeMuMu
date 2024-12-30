import React from 'react';
import { IconLoader2 } from '@tabler/icons-react';

interface LoadingIconProps {
  stroke?: number;
  width?: string | number;
  height?: string | number;
  color?: string;
}

export default function LoadingIcon({
  stroke = 2,
  width = 30,
  height = 30,
  color = '#64748b',
}: LoadingIconProps) {
  return <IconLoader2 stroke={stroke} width={width} height={height} color={color} />;
}
