import React from 'react';

import IconBar from '@/components/molecules/IconBar';

import { cn } from '@/lib/utils';

const TitleWithIcons = ({ className }: { className?: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className={cn(className, 'text-4xl')}>
        Seth Grief-Albert
      </h1>
      <IconBar />
    </div>
  );
};

export default TitleWithIcons;
