export type Area =
  'mossyRock'
  | 'icyRock'
  | 'magneticField'
  | 'mountLanakila';

const AREA_KEY_LIST: Area[] = [
  'magneticField',
  'mossyRock',
  'icyRock',
  'mountLanakila',
];

const AREA_LIST_KO: Record<Area, string> = {
  mossyRock: '이끼 낀 바위 근처',
  icyRock: '얼음 바위 근처',
  magneticField: '자기장 영역',
  mountLanakila: '라나키라마운틴',
};

export {
  AREA_KEY_LIST,
  AREA_LIST_KO,
};
