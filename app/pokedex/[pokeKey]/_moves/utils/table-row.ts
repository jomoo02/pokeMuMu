import { Move } from '@/app/models/detail.type';
import { MoveMethod } from '../config/move-method';

export type TableRowItem = {
  content: string | number;
  className: string;
};

export default function getTableRowItemWithMethod(
  moveMethod: MoveMethod,
  move: Move,
): TableRowItem | null {
  if (moveMethod === 'level-up') {
    return {
      content: move?.level || -1,
      className: 'text-center px-2 font-medium',
    };
  } if (moveMethod === 'pre' {
    return {
      content:
    }
  })

  return null;
}
