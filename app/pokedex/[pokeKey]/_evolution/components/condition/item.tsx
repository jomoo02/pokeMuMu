import React from 'react';
import {
  ItemLink,
  ItmeLinkWithParticle,
} from '@/app/components/item-link';
import { EVOLUTION_ITEM_LIST } from '@/app/data/evolution-item';
import type { ConditionValue } from '@/app/models/evolution.type';

interface ItemProps {
  value: ConditionValue;
}

function HeldItem({
  value,
}: ItemProps) {
  if (typeof value !== 'string' || !EVOLUTION_ITEM_LIST[value]) {
    return null;
  }

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
  if (typeof value !== 'string' || !EVOLUTION_ITEM_LIST[value]) {
    return null;
  }

  const item = EVOLUTION_ITEM_LIST[value];

  return (
    <ItemLink item={item} />
  );
}

const CondtionItem = {
  HeldItem,
  UseItem,
};

export default CondtionItem;
