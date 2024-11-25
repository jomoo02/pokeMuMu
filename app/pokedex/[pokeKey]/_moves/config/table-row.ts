import type { CellKey } from './cell-key';

export type TableRowItem = {
  content: string;
  className: string;
  id: CellKey;
};

const defaultRowItemList: TableRowItem[] = [

];