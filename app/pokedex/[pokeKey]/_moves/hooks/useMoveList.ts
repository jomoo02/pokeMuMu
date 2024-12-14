import {
  useState,
  useMemo,
} from 'react';
import type { Moves } from '@/app/models/detail.type';

export default function useMoveList(moves: Moves) {
  const genList = moves.map(({ gen }) => gen);

  const initialTargetGen = genList.at(-1) || genList[0];

  const [targetGen, setTargetGen] = useState(initialTargetGen);

  const targetGenMoveList = useMemo(() => (
    moves.find(({ gen }) => gen === targetGen)!.genMoves
  ), [targetGen]);

  const handleTargetGen = (gen: number) => {
    if (gen >= 1 && gen <= 9) {
      setTargetGen(gen);
    }
  };

  return {
    genList,
    targetGen,
    handleTargetGen,
    targetGenMoveList,
  };
}
