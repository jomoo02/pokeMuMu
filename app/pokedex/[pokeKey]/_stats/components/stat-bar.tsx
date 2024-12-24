import React from 'react';
import { calculateBarWidth } from '../lib/stat';

interface StatBarProps {
  value: number;
  max: number;
}

export default function StatBar({
  value,
  max,
}: StatBarProps) {
  const width = calculateBarWidth(value, max);

  const barColor = (() => {
    if (value > 200) return '#06b6d4';
    if (value >= 130) return '#22c55e';
    if (value >= 100) return '#84cc16';
    if (value >= 70) return '#fbbf24';
    if (value >= 30) return '#f97316';
    return '#dc2626';
  })();

  return (
    <svg width="100%" height="11">
      <g className="bars">
        <rect fill={barColor} width={width} height="11" rx="4" />
      </g>
    </svg>
  );
}
