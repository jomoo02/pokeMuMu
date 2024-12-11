import React from 'react';

export default function PokeCardListHeader() {
  const headerStatItems = [
    '체력',
    '공격',
    '방어',
    '특수공격',
    '특수방어',
    '스피드',
  ];

  return (
    <div className="pokedex-header">
      <div className="w-card-number flex items-center justify-center">
        #
      </div>
      <div className="w-card-name flex items-center">
        이름
      </div>
      <div className="w-card-type flex items-center justify-center">
        타입
      </div>
      <div className="pokedex-header-total">
        종족값
      </div>
      {headerStatItems.map((item) => (
        <div key={item} className="pokedex-header-stat">
          {item}
        </div>
      ))}
    </div>
  );
}
