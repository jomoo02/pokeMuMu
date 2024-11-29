import React from 'react';
import type { MoveMethod } from '@/app/models/detail.type';
import {
  METHOD_MOVE_TITLE_LIST,
} from '../../config/title';

interface TitleProps {
  moveMethod: MoveMethod;
}

export default function Title({
  moveMethod,
}: TitleProps) {
  const title = METHOD_MOVE_TITLE_LIST[moveMethod] || '기술';
  return (
    <h3 className="font-bold text-slate-800 my-2 text-lg">
      {title}
    </h3>
  );
}
