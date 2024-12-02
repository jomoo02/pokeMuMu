import React from 'react';
import Link from 'next/link';
import {
  getSubjectParticle,
  getParticleForAnd,
} from '@/app/utils/word-particle';

interface PokeLinkProps {
  poke: string;
  content: string;
  children?: React.ReactNode;
}

interface PokeLinkWithParticleProps {
  poke: string;
  content: string;
}

export function PokeLink({
  poke,
  content,
  children,
}: PokeLinkProps) {
  return (
    <>
      <Link
        href={`/pokedex/${poke}`}
        className="underline hover:text-blue-400"
      >
        {content}
      </Link>
      {children}
    </>
  );
}

export function PokeLinkWithSubjectParticle({
  poke,
  content,
}: PokeLinkWithParticleProps) {
  const subjectParticle = getSubjectParticle(content);

  return (
    <PokeLink
      poke={poke}
      content={content}
    >
      {subjectParticle && <span>{subjectParticle}</span>}
    </PokeLink>
  );
}

export function PokeLinkWithParticleForAnd({
  poke,
  content,
}: PokeLinkWithParticleProps) {
  const particleForAnd = getParticleForAnd(content);

  return (
    <PokeLink
      poke={poke}
      content={content}
    >
      {particleForAnd && <span>{particleForAnd}</span>}
    </PokeLink>
  );
}
