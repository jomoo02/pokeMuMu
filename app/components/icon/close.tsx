import React from 'react';
import { IconX } from '@tabler/icons-react';

interface CloseIconProps {
  size?: number | string;
}

export default function CloseIcon({
  size = 1,
}: CloseIconProps) {
  return <IconX size={size} />;
}
