import React from 'react';
import type { ConditionValue } from '@/app/models/evolution.type';
import {
  EVOLUTION_MOVE_LIST,
  type EvolutionMove,
} from '@/app/data/evolution-move';
import {
  POKE_TYPE_LIST,
  type PokeType,
} from '@/app/data/poke-type';
import MoveLink from '@/app/components/move-link';

interface NormalMoveProps {
  move: string;
  suffix: string;
}

interface MoveProps {
  value: ConditionValue;
}

const isEvolutionMove = (value: string): value is EvolutionMove => (
  value in EVOLUTION_MOVE_LIST
);

const isPokeType = (value: string): value is PokeType => value in POKE_TYPE_LIST;

function NormalMove({
  move,
  suffix,
}: NormalMoveProps) {
  return (
    <span>
      <MoveLink move={move} />
      <span className="ml-1">{suffix}</span>
    </span>
  );
}

function KnownMove({
  value,
}: MoveProps) {
  if (typeof value === 'string' && isEvolutionMove(value)) {
    const move = EVOLUTION_MOVE_LIST[value];

    return <NormalMove move={move} suffix="배운 상태에서" />;
  }
  return null;
}

function AgileStyle({
  value,
}: MoveProps) {
  if (typeof value === 'string' && isEvolutionMove(value)) {
    const move = EVOLUTION_MOVE_LIST[value];

    return <NormalMove move={move} suffix="속공으로 20번 사용" />;
  }
  return null;
}

function StrongStyle({
  value,
}: MoveProps) {
  if (typeof value === 'string' && isEvolutionMove(value)) {
    const move = EVOLUTION_MOVE_LIST[value];

    return <NormalMove move={move} suffix="강공으로 20번 사용" />;
  }

  return null;
}

function UsedMove({
  value,
}: MoveProps) {
  if (typeof value === 'string' && isEvolutionMove(value)) {
    const move = EVOLUTION_MOVE_LIST[value];

    return <NormalMove move={move} suffix="20번 사용 후" />;
  }

  return null;
}

function KnownMoveType({
  value,
}: MoveProps) {
  if (typeof value === 'string' && isPokeType(value)) {
    const content = `${POKE_TYPE_LIST[value]} 타입 기술을 배우고`;

    return <span>{content}</span>;
  }
  return null;
}

const ConditionMove = {
  KnownMove,
  AgileStyle,
  StrongStyle,
  UsedMove,
  KnownMoveType,
};

export default ConditionMove;
