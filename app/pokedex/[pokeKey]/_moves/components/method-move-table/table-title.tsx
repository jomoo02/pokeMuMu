import React from 'react';
import type { MoveMethod } from '@/app/models/pokev4.type';
import {
  TABLE_TITLE_LIST,
} from '../../data/table-title';

interface TitleProps {
  moveMethod: MoveMethod;
}

export default function TableTitle({
  moveMethod,
}: TitleProps) {
  const title = TABLE_TITLE_LIST[moveMethod] || '기술';

  return (
    <h3 className="font-bold my-2 text-base lg:text-lg">
      {title}
    </h3>
  );
}
