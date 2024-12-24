export type Region =
  'alola'
  | 'galar'
  | 'hisui';

const REGION_LIST_KO: Record<Region, string> = {
  alola: '알로라지방',
  galar: '가라르지방',
  hisui: '히스이지방',
};

export {
  REGION_LIST_KO,
};
