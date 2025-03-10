import React from 'react';

const TypographyCard = ({ size, name, className }) => (
  <div className="flex flex-row gap-8 w-full items-top">
    <div className="min-w-32">
      <span className="text-sm font-medium text-gray-600">{name}</span>
      <span className="block font-mono text-xs text-gray-500">{size}</span>
    </div>
    <div className={className}>
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
);

const TypographyRow = ({ title, items }) => (
  <div className="flex flex-col gap-8 align-top">
    <h3 className="m-0 text-xl font-semibold">{title}</h3>
    <div className="flex flex-col gap-6">
      {Object.entries(items).map(([name, { size, className }]) => (
        <TypographyCard key={name} name={name} size={size} className={className} />
      ))}
    </div>
  </div>
);

const TypographyTokens = () => {
  const displayText = {
    'display-lg': {
      size: '48px / 60px',
      className: 'text-5xl font-bold tracking-tight'
    },
    'display-md': {
      size: '36px / 44px',
      className: 'text-4xl font-bold tracking-tight'
    },
    'display-sm': {
      size: '30px / 38px',
      className: 'text-3xl font-bold tracking-tight'
    },
  };

  const bodyText = {
    'text-xl': {
      size: '20px / 30px',
      className: 'text-xl'
    },
    'text-lg': {
      size: '18px / 28px',
      className: 'text-lg'
    },
    'text-md': {
      size: '16px / 24px',
      className: 'text-base'
    },
    'text-sm': {
      size: '14px / 20px',
      className: 'text-sm'
    },
    'text-xs': {
      size: '12px / 16px',
      className: 'text-xs'
    },
  };

  return (
    <div className="flex flex-col gap-16">
      <TypographyRow title="Display" items={displayText} />
      <TypographyRow title="Body" items={bodyText} />
    </div>
  );
};

export default TypographyTokens;

