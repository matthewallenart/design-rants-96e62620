import React from 'react';
import { Header } from '@/components/Header';
import { QuoteSection } from '@/components/QuoteSection';

const Index = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
      />
      <div className="w-full h-screen relative overflow-hidden bg-[#8B5CF6]">
        <Header 
          title="Design Rants"
          contact="Made by matt"
        />
        
        <QuoteSection />
      </div>
    </>
  );
};

export default Index;
