import React from 'react';
import {
  type Area,
  AREA_LIST_KO,
} from '@/app/data/area';
import {
  type Region,
  REGION_LIST_KO,
} from '@/app/data/region';
import { ConditionValue } from '@/app/models/evolution.type';

interface LocationProps {
  value: ConditionValue;
}

const isRegion = (region: string): region is Region => region in REGION_LIST_KO;

const isArea = (area: string): area is Area => area in AREA_LIST_KO;

function LocationRegion({
  value,
}: LocationProps) {
  if (typeof value === 'string' && isRegion(value)) {
    const region = REGION_LIST_KO[value];

    return <span>{region}</span>;
  }

  return null;
}

function LocationArea({
  value,
}: LocationProps) {
  if (typeof value === 'string' && isArea(value)) {
    const area = AREA_LIST_KO[value];

    return <span>{`${area}에서`}</span>;
  }

  return <span>특정장소에서</span>;
}

const ConditionLocation = {
  Region: LocationRegion,
  Area: LocationArea,
};

export default ConditionLocation;
