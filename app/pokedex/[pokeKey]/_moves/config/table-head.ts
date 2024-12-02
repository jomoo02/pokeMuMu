import type { MachineType } from '@/app/models/detail.type';
import type { CellKey } from './cell-key';

export type TableHeadItem = {
  content: string;
  className: string;
  id: CellKey;
};

const defaultHeadItemList: TableHeadItem[] = [
  {
    content: '기술',
    className: 'min-w-[10.2rem]',
    id: 'name',
  },
  {
    content: '타입',
    className: 'min-w-[5.25rem]',
    id: 'type',
  },
  {
    content: '분류',
    className: 'min-w-[5.25rem]',
    id: 'damageClass',
  },
  {
    content: '위력',
    className: 'min-w-[5.25rem]',
    id: 'power',
  },
  {
    content: '명중률',
    className: 'min-w-[5.25rem]',
    id: 'accuracy',
  },
];

const levelHeadItem: TableHeadItem = {
  content: 'Lv.',
  className: 'min-w-[3.35rem]',
  id: 'level',
};

const prePokeHeadItem: TableHeadItem = {
  content: 'Poké',
  className: 'min-w-[4.8rem]',
  id: 'prePoke',
};

const getMachineHeadItem = (machineType: MachineType): TableHeadItem => ({
  content: machineType.toUpperCase(),
  className: 'min-w-[3.35rem]',
  id: 'machine',
});

export {
  defaultHeadItemList,
  levelHeadItem,
  prePokeHeadItem,
  getMachineHeadItem,
};
