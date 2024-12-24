import type {
  ConditionItem,
  TriggerKey,
} from '@/app/models/evolution.type';

function getTriggerContent(
  trigger: TriggerKey,
  conditionList: ConditionItem[],
) {
  const triggerContent = (() => {
    if (trigger === 'level-up' && !conditionList.find(({ key }) => key === 'min_level')) {
      return '레벨 업';
    } if (trigger === 'use-item') {
      return '사용';
    } if (trigger === 'trade') {
      return '통신교환';
    }
    return '';
  })();

  return triggerContent;
}

export {
  getTriggerContent,
};
