import React from 'react';
import type { OtherPoke } from '@/app/models/evolution.type';
import { ItmeLinkWithParticle } from '@/app/components/item-link';
import { OTHER_POKE_CONTENT } from '../../config/other-poke';

function Other({
  value,
}: {
  value: OtherPoke;
}) {
  const content = OTHER_POKE_CONTENT[value];

  return <span>{content}</span>;
}

function Spin({
  value,
}: {
  value: string;
}) {
  if (value !== 'spin') {
    return <span />;
  }

  return (
    <span>
      <ItmeLinkWithParticle item="사탕공예" />
      <span className="ml-1">
        지니게하고 L스틱으로 캐릭터를 계속 회전
      </span>
    </span>
  );
}

function TurnUpsideDown({
  value,
}: {
  value: boolean;
}) {
  if (!value) {
    return <span />;
  }

  return <span>기기를 위아래 거꾸로 잡은 상태</span>;
}

function RecoilDamage({
  value,
}: {
  value: number;
}) {
  const content = `누적 반동 데미지 ${value} 이상 입은 상태에서`;

  return <span>{content}</span>;
}

const ConditionOther = {
  Other,
  Spin,
  TurnUpsideDown,
  RecoilDamage,
};

export default ConditionOther;
