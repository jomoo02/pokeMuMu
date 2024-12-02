import {
  AREA_KEY_LIST,
  type Area,
} from '@/app/data/area';
import type {
  RegionalArea,
} from '../config/area.type';
import { MAGNETIC_FILED_REGIONAL_AREA } from '../config/area-magnetic-filed';
import { MOSSY_ROCK_REGIONAL_AREA } from '../config/area-mossy-rock';
import { ICY_ROCK_REGIONAL_AREA } from '../config/area-icy-rock';

const AREA_CASE = [34, 62, 123, 265];

export type AreaInfo = {
  title: string;
  regionalAreaList: RegionalArea[];
  id: string;
};

function setAreaListWithChainId(id: number) {
  const areaCaseMap: Record<Area, number[]> = {
    magneticField: [34, 123],
    mossyRock: [62],
    icyRock: [62],
    mountLanakila: [265],
  };

  return AREA_KEY_LIST.filter((area) => (
    areaCaseMap[area].includes(id)
  ));
}

function getAreaList(id: number) {
  if (!AREA_CASE.includes(id)) {
    return { areaList: [] };
  }

  const areaInfoMap: Record<Area, AreaInfo> = {
    magneticField: {
      id: 'magneticFiled',
      title: '자기장 영역',
      regionalAreaList: MAGNETIC_FILED_REGIONAL_AREA,
    },
    mossyRock: {
      id: 'mossyRock',
      title: '이끼 낀 바위 근처',
      regionalAreaList: MOSSY_ROCK_REGIONAL_AREA,
    },
    icyRock: {
      id: 'icyRock',
      title: '얼음 바위 근처',
      regionalAreaList: ICY_ROCK_REGIONAL_AREA,
    },
    mountLanakila: {
      id: 'mountLanakila',
      title: '라나키라마운틴',
      regionalAreaList: MAGNETIC_FILED_REGIONAL_AREA.filter(({ region }) => region === 'Alola' || region === '알로라'),
    },
  };

  const areaList = setAreaListWithChainId(id)
    .map((area) => areaInfoMap[area]);

  return { areaList };
}

export {
  getAreaList,
};
