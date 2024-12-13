import React from 'react';
import { getAreaList } from '../lib/area';
import type { RegionalArea } from '../data/area.type';

interface AreaItemProps {
  regionalAreaList: RegionalArea[];
}

interface AreaProps {
  id: number;
}

function AreaItem({
  regionalAreaList,
}: AreaItemProps) {
  return (
    <>
      {regionalAreaList.map(({ region, area }) => (
        <div
          key={region}
          className="grid divide-x grid-cols-5 text-sm  leading-4 font-medium h-10 items-stretch border-b-2 last:border-b-0"
        >
          <div className="flex justify-center items-center">
            {region}
          </div>
          <div className="col-span-4 flex items-center px-2">
            {area}
          </div>
        </div>
      ))}
    </>
  );
}

export default function Area({
  id,
}: AreaProps) {
  const { areaList } = getAreaList(id);

  if (areaList.length === 0) {
    return null;
  }

  return (
    <>
      {areaList.map(({ regionalAreaList, title, id: areaId }) => (
        <div key={areaId}>
          <div
            className="flex justify-center py-0.5 font-semibold items-center text-white text-sm"
          >
            {title}
          </div>
          <AreaItem regionalAreaList={regionalAreaList} />
        </div>
      ))}
    </>
  );
}
