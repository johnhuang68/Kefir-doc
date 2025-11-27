import React from 'react';
import { MilkKefirBenefits } from './components/MilkKefirBenefits';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
      <main className="w-full max-w-4xl">
        <MilkKefirBenefits />
      </main>
    </div>
  );
};

export default App;