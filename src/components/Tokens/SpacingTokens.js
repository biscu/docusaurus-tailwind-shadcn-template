import React from 'react';

const SpacingCard = ({ size, name, value }) => (
  <div className="flex flex-row gap-8 items-center">
    <div className="min-w-32">
      <span className="text-sm font-medium text-gray-600">{name}</span>
      <span className="block font-mono text-xs text-gray-500">{value}</span>
    </div>
    <div className="flex items-center">
      <div className="h-4 bg-blue-100"></div>
      <div className={`h-4 bg-blue-200 ${size}`}></div>
      <div className="h-4 bg-blue-100"></div>
    </div>
  </div>
);

const SpacingRow = ({ title, items }) => (
  <div className="flex flex-col gap-8">
    <h3 className="m-0 text-xl font-semibold">{title}</h3>
    <div className="flex flex-col gap-6">
      {Object.entries(items).map(([name, { size, value }]) => (
        <SpacingCard key={name} name={name} size={size} value={value} />
      ))}
    </div>
  </div>
);


const SpacingTokens = () => {
  const spacingInline = {
    'space-1': {
      value: '4px',
      size: 'w-1'
    },
    'space-2': {
      value: '8px',
      size: 'w-2'
    },
    'space-3': {
      value: '12px',
      size: 'w-3'
    },
    'space-4': {
      value: '16px',
      size: 'w-4'
    },
    'space-6': {
      value: '24px',
      size: 'w-6'
    },
    'space-8': {
      value: '32px',
      size: 'w-8'
    },
    'space-12': {
      value: '48px',
      size: 'w-12'
    },
    'space-16': {
      value: '64px',
      size: 'w-16'
    },
  };

  return (
    <div className="flex flex-col gap-16">
      <SpacingRow title="Inline Spacing" items={spacingInline} />
    </div>
  );
};

export default SpacingTokens;
