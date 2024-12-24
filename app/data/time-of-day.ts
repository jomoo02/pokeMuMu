export type TimeOfDay =
  'night'
  | 'day'
  | 'dusk'
  | 'full-moon';

const TIME_OF_DAY: Record<TimeOfDay, string> = {
  night: '밤',
  day: '낮',
  dusk: '황혼',
  'full-moon': '보름달',
};

export {
  TIME_OF_DAY,
};
