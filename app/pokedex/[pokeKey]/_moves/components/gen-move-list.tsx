import React from 'react';
import { GenMoves } from '@/app/models/detail.type';
import { PokeType } from '@/app/data/poke-type';
import VersionMoveList from './version-move-list';
import useGenMoveList from '../hooks/useGenMoveList';
import ButtonGroup from './button-group';

interface GenMoveListProps {
  genMoves: GenMoves;
  type: PokeType;
}

export default function GenMoveList({
  genMoves,
  type,
}: GenMoveListProps) {
  const {
    targetGenVersion,
    handleTargetVersion,
    genVersionMoveList,
    genVersionList,
  } = useGenMoveList(genMoves);

  return (
    <>
      <div className={`px-1 sm:px-2 lg:px-7 border-b-2 pt-3 ${type}-border`}>
        <ButtonGroup.Version
          versions={genVersionList}
          type={type}
          targetVersion={targetGenVersion}
          setTargetVersion={handleTargetVersion}
        />
      </div>
      <div className="px-1 xs:px-2 md:px-3 py-3 2xl:px-10">
        <VersionMoveList
          key={targetGenVersion}
          versionMoveList={genVersionMoveList}
        />
      </div>
    </>
  );
}
