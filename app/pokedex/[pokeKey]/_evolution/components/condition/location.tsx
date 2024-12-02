import React from 'react';
import {
  AREA_LIST,
  type Area,
} from '@/app/data/area';
import {
  REGION_LIST,
  type Region,
} from '@/app/data/region';

interface LocationRegionProps {
  value: Region;
}

interface LocationAreaProps {
  value: Area;
}

function LocationRegion({
  value,
}: LocationRegionProps) {
  const region = REGION_LIST[value];

  return <span>{region}</span>;
}

function LocationArea({
  value,
}: LocationAreaProps) {
  const area = AREA_LIST[value];

  if (!area) {
    return <span>특정장소에서</span>;
  }
  return <span>{`${area}에서`}</span>;
}

const ConditionLocation = {
  Region: LocationRegion,
  Area: LocationArea,
};

export default ConditionLocation;
