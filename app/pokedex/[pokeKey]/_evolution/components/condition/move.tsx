import React from 'react';
import {
  EVOLUTION_MOVE_LIST,
  EvolutionMove,
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
  value: EvolutionMove;
}

interface MoveTypeProps {
  value: PokeType;
}

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
  const move = EVOLUTION_MOVE_LIST[value];

  return <NormalMove move={move} suffix="배운 상태에서" />;
}

function AgileStyle({
  value,
}: MoveProps) {
  const move = EVOLUTION_MOVE_LIST[value];

  return <NormalMove move={move} suffix="속공으로 20번 사용" />;
}

function StrongStyle({
  value,
}: MoveProps) {
  const move = EVOLUTION_MOVE_LIST[value];

  return <NormalMove move={move} suffix="강공으로 20번 사용" />;
}

function UsedMove({
  value,
}: MoveProps) {
  const move = EVOLUTION_MOVE_LIST[value];

  return <NormalMove move={move} suffix="20번 사용 후" />;
}

function KnownMoveType({
  value,
}: MoveTypeProps) {
  const type = POKE_TYPE_LIST[value];

  const content = `${type} 타입 기술을 배우고`;

  return <span>{content}</span>;
}

const ConditionMove = {
  KnownMove,
  AgileStyle,
  StrongStyle,
  UsedMove,
  KnownMoveType,
};

export default ConditionMove;
