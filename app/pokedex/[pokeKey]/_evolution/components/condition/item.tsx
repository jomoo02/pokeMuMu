import React from 'react';
import {
  ItemLink,
  ItmeLinkWithParticle,
} from '@/app/components/item-link';
import {
  EVOLUTION_ITEM_LIST,
  type EvolutionItem,
} from '@/app/data/evolution-item';

interface ItemProps {
  value: EvolutionItem;
}

function HeldItem({
  value,
}: ItemProps) {
  const item = EVOLUTION_ITEM_LIST[value];

  return (
    <>
      <ItmeLinkWithParticle item={item} />
      <span className="ml-1">지닌채</span>
    </>
  );
}

function UseItem({
  value,
}: ItemProps) {
  const item = EVOLUTION_ITEM_LIST[value];

  return (
    <>
      <ItemLink item={item} />
    </>
  );
}

const CondtionItem = {
  HeldItem,
  UseItem,
};

export default CondtionItem;
