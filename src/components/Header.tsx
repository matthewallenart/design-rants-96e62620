import React from 'react';

interface HeaderProps {
  title: string;
  contact: string;
}

export const Header: React.FC<HeaderProps> = ({ title, contact }) => {
  return (
    <header className="flex w-full flex-col items-start gap-6 absolute h-[99px] left-0 top-0">
      <div className="flex items-start content-start gap-[24px_887px] w-full flex-wrap box-border pt-6 pb-0 px-6 max-sm:pt-6 max-sm:pb-0 max-sm:px-6">
        <div className="flex w-full max-w-[1379px] justify-between items-center mx-auto my-0 max-md:px-0 max-md:py-0 max-sm:px-0">
          <h1 className="text-white text-4xl font-bold leading-[54px] max-md:text-[32px] max-md:leading-[48px] max-sm:text-2xl max-sm:leading-[36px]">
            Design rants
          </h1>
          <a 
            href="https://matthewallen.design/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-base font-bold leading-[54px] tracking-[3.36px] uppercase max-md:text-sm max-md:leading-[48px] max-sm:text-xs max-sm:leading-[36px] max-sm:tracking-[2px] hover:opacity-80 hover:underline transition-all duration-200 cursor-pointer z-10 relative"
          >
            {contact}
          </a>
        </div>
      </div>
      <div className="w-full h-px bg-[rgba(255,255,255,0.20)]" />
    </header>
  );
};
