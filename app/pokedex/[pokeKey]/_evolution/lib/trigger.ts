import type {
  ConditionItem,
  ConditionKey,
  TriggerKey,
} from '@/app/models/evolution.type';

export function getTriggerContent<C extends ConditionKey>(
  trigger: TriggerKey,
  conditionList: ConditionItem<C>[],
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
