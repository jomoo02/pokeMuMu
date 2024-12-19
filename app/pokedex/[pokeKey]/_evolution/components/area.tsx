import React from 'react';
import { getAreaList } from '../lib/area';

interface AreaProps {
  id: number;
}

export default function Area({
  id,
}: AreaProps) {
  const { areaList } = getAreaList(id);

  if (areaList.length === 0) {
    return null;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-x-24 xl:gap-x-32 gap-y-6 mt-6">
      {areaList.map(({ regionalAreaList, title, id: areaId }) => (
        <div key={areaId}>
          <div className="flex py-1.5 font-bold items-center text-base lg:text-lg">
            {title}
          </div>
          <div className="border-2 border-slate-500 rounded-lg grid divide-y divide-slate-400">
            {regionalAreaList.map(({ region, area }) => (
              <div
                key={region}
                className="grid divide-x divide-slate-400 grid-cols-5 text-sm lg:text-[15px] h-10 items-stretch"
              >
                <div className="flex justify-center items-center">
                  {region}
                </div>
                <div className="col-span-4 flex items-center px-2">
                  {area}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
