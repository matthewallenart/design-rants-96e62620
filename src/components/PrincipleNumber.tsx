import React from 'react';

interface PrincipleNumberProps {
  number: number;
  isVisible: boolean;
}

export const PrincipleNumber: React.FC<PrincipleNumberProps> = ({ number, isVisible }) => {
  return (
    <div className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-white/20 text-[200px] font-bold leading-none max-lg:text-[150px] max-md:text-[120px] max-sm:text-[80px] select-none">
        {String(number).padStart(2, '0')}
      </div>
    </div>
  );
};