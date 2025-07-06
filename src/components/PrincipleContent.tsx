import React from 'react';
import { DesignPrinciple } from '@/data/designPrinciples';

interface PrincipleContentProps {
  principle: DesignPrinciple;
  isVisible: boolean;
}

export const PrincipleContent: React.FC<PrincipleContentProps> = ({ principle, isVisible }) => {
  return (
    <div className={`flex-1 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <section className="text-white/80 text-xl font-medium leading-[30px] mb-6 max-md:text-lg max-sm:text-base">
        <h2 className="m-0 p-0">{principle.highlightedWord}</h2>
      </section>
      
      <section className="text-white text-[48px] font-bold leading-[60px] max-lg:text-[40px] max-lg:leading-[50px] max-md:text-[32px] max-md:leading-[40px] max-sm:text-[24px] max-sm:leading-[32px]">
        <p className="m-0 p-0 max-w-[calc(100%-60px)]">{principle.quoteText}</p>
      </section>
    </div>
  );
};