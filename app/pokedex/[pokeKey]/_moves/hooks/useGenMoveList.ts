import { useMemo, useState } from 'react';
import {
  VERSION_LIST,
  type Version,
} from '@/app/data/version';
import type { GenMoves } from '@/app/models/pokev4.type';

export default function useGenMoveList(genMoveList: GenMoves) {
  const filterdGenMoveList = genMoveList.filter(({ versionMoves }) => (
    Object.values(versionMoves).some((moveList) => moveList.length > 0)
  ));

  const genVersionList = filterdGenMoveList.map(({ version }) => ({
    version,
    localeVersion: VERSION_LIST[version],
  }));

  const initialTargetGenVersion = filterdGenMoveList[0].version;

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
