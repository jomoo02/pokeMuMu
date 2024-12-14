import { useMemo, useState } from 'react';
import {
  VERSION_LIST,
  type Version,
} from '@/app/data/version';
import type { GenMoves } from '@/app/models/detail.type';

function setInitialTargetGenVersion(genMoveList: GenMoves) {
  const targetGenVersion = genMoveList.find(({ versionMoves }) => (
    Object.values(versionMoves).some((moveList) => moveList.length > 0)
  ));

  if (!targetGenVersion) {
    throw new Error('Target version moves not found');
  }

  return targetGenVersion.version;
}

export default function useGenMoveList(genMoveList: GenMoves) {
  const genVersionList = genMoveList.map(({ version }) => ({
    version,
    localeVersion: VERSION_LIST[version],
  }));

  const initialTargetGenVersion = setInitialTargetGenVersion(genMoveList);

  const [targetGenVersion, setTargetGenVersion] = useState(initialTargetGenVersion);

  const genVersionMoveList = useMemo(() => (
    genMoveList.find(({ version }) => version === targetGenVersion)?.versionMoves
  ), [targetGenVersion]);

  const handleTargetVersion = (version: Version) => {
    if (VERSION_LIST[version]) {
      setTargetGenVersion(version);
    }
  };

  return {
    targetGenVersion,
    handleTargetVersion,
    genVersionMoveList,
    genVersionList,
  };
}
