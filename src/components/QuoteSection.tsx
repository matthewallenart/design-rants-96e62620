import React from 'react';
import { designPrinciples } from '@/data/designPrinciples';
import { usePrincipleRotation } from '@/hooks/usePrincipleRotation';
import { PrincipleNumber } from '@/components/PrincipleNumber';
import { PrincipleContent } from '@/components/PrincipleContent';

export const QuoteSection: React.FC = () => {
  const { currentIndex, isVisible } = usePrincipleRotation(designPrinciples.length);
  const currentPrinciple = designPrinciples[currentIndex];
  return (
    <main className="absolute inset-0 flex items-center justify-center px-6 max-md:px-5 max-sm:px-4">
      <div className="w-full max-w-[1400px] mx-auto flex items-center gap-8 max-lg:gap-6 max-md:flex-col max-md:text-center">
        <PrincipleNumber number={currentIndex + 1} isVisible={isVisible} />
        <PrincipleContent principle={currentPrinciple} isVisible={isVisible} />
      </div>
    </main>
  );
};
