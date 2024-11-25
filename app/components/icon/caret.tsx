import React from 'react';
import {
  IconCaretDownFilled, IconCaretUpFilled, IconCaretUpDownFilled,
} from '@tabler/icons-react';

interface CaretIconProps {
  isSelect: boolean;
  isAsc: boolean;
  size?: number;
  stroke?: number;
}

export default function CaretIcon({
  isSelect = false,
  isAsc = false,
  size = 14,
  stroke = 1,
}: CaretIconProps) {
  if (!isSelect) {
    return <IconCaretUpDownFilled size={size} stroke={stroke} />;
  }

  if (isAsc) {
    return <IconCaretDownFilled size={size} stroke={stroke} />;
  }

  return <IconCaretUpFilled size={size} stroke={stroke} />;
}
