const PARTY_SPECIES = {
  remoraid: '총어',
};

export type PartySpeciesPoke = keyof typeof PARTY_SPECIES;

const TRADE_SPECEIS = {
  shelmet: '쪼마리',
  karrablast: '딱정곤',
};

export type TradeSpeciesPoke = keyof typeof TRADE_SPECEIS;

export {
  PARTY_SPECIES,
  TRADE_SPECEIS,
};
