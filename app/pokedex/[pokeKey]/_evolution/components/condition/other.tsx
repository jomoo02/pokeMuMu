import React from 'react';
import type { ConditionValue } from '@/app/models/evolution.type';
import { ItmeLinkWithParticle } from '@/app/components/item-link';
import {
  type OtherPoke,
  OTHER_POKE_CONTENT,
} from '../../config/other-poke';

interface OtherProps {
  value: ConditionValue;
}

const isOtherPoke = (v: string): v is OtherPoke => v in OTHER_POKE_CONTENT;

function Other({
  value,
}: OtherProps) {
  if (typeof value === 'string' && isOtherPoke(value)) {
    const content = OTHER_POKE_CONTENT[value];

    return <span>{content}</span>;
  }

  return null;
}

function Spin({
  value,
}: OtherProps) {
  if (typeof value === 'string' && value === 'spin') {
    return (
      <span>
        <ItmeLinkWithParticle item="사탕공예" />
        <span className="ml-1">
          지니게하고 L스틱으로 캐릭터를 계속 회전
        </span>
      </span>
    );
  }

  return null;
}

function TurnUpsideDown({
  value,
}: OtherProps) {
  if (typeof value === 'boolean' && value) {
    return <span>기기를 위아래 거꾸로 잡은 상태</span>;
  }

  return null;
}

function RecoilDamage({
  value,
}: OtherProps) {
  if (typeof value === 'number') {
    const content = `누적 반동 데미지 ${value} 이상 입은 상태에서`;

    return <span>{content}</span>;
  }

  return null;
}

const ConditionOther = {
  Other,
  Spin,
  TurnUpsideDown,
  RecoilDamage,
};

export default ConditionOther;
