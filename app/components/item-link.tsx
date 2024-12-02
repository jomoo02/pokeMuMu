import React from 'react';
import {
  getParticle,
} from '@/app/utils/word-particle';

interface ItemLinkProps {
  item: string;
  children?: React.ReactNode;
}

interface ItemLinkWithParticleProps {
  item: string;
}

export function ItemLink({
  item,
  children,
}: ItemLinkProps) {
  return (
    <>
      <span className="text-nowrap">{item}</span>
      {children}
    </>
  );
}

export function ItmeLinkWithParticle({
  item,
}: ItemLinkWithParticleProps) {
  const particle = getParticle(item);

  return (
    <ItemLink item={item}>
      {particle && <span>{particle}</span>}
    </ItemLink>
  );
}
