import React from 'react';
import { IconSearch } from '@tabler/icons-react';

interface SearchIconProps {
  size?: string;
  color?: string;
}

export default function SearchIcon({
  size = '1rem',
  color = '#334155',
}: SearchIconProps) {
  return <IconSearch size={size} stroke={2} color={color} />;
}
