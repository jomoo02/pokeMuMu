import React from 'react';
import { getParticle } from '../utils/word-particle';

interface MoveLinkProps {
  move: string;
}

export default function MoveLink({
  move,
}: MoveLinkProps) {
  const particle = getParticle(move);

  return (
    <>
      <span>{move}</span>
      {particle && <span>{particle}</span>}
    </>
  );
}
