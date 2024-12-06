import type {
  ConditionKey,
  ConditionItem,
} from '@/app/models/evolution.type';

function sortConditionList(conditionItemList: ConditionItem[]) {
  const firstConditionKeyList: ConditionKey[] = [
    'time_of_day',
    'location',
  ];

  const lastConditionKeyList: ConditionKey[] = [
    'min_level',
  ];

  const firstConditionItemList: ConditionItem[] = [];
  const lastConditionItemList: ConditionItem[] = [];
  const generalConditionItemList: ConditionItem[] = [];

  conditionItemList.forEach((conditionItem) => {
    const { key } = conditionItem;

    if (firstConditionKeyList.includes(key)) {
      firstConditionItemList.push(conditionItem);
    } else if (lastConditionKeyList.includes(key)) {
      lastConditionItemList.push(conditionItem);
    } else {
      generalConditionItemList.push(conditionItem);
    }
  });

  return [
    ...firstConditionItemList,
    ...generalConditionItemList,
    ...lastConditionItemList,
  ];
}

export {
  sortConditionList,
};
