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
    className: 'w-[10.2rem]',
    id: 'name',
  },
  {
    content: '타입',
    className: 'w-[5.25rem]',
    id: 'type',
  },
  {
    content: '분류',
    className: 'w-[5.25rem]',
    id: 'damageClass',
  },
  {
    content: '위력',
    className: 'w-[5.25rem]',
    id: 'power',
  },
  {
    content: '명중률',
    className: 'w-[5.25rem]',
    id: 'accuracy',
  },
];

const levelHeadItem: TableHeadItem = {
  content: 'Lv.',
  className: 'w-[3.35rem]',
  id: 'level',
};

const prePokeHeadItem: TableHeadItem = {
  content: '',
  className: 'w-[4.8rem]',
  id: 'prePoke',
};

const getMachineHeadItem = (machineType: MachineType): TableHeadItem => ({
  content: machineType.toUpperCase(),
  className: 'w-14',
  id: 'machine',
});

export {
  defaultHeadItemList,
  levelHeadItem,
  prePokeHeadItem,
  getMachineHeadItem,
};
