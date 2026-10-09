import React from 'react';

export default function Navbar() {
  const onViewCurriculum = () => {
    // Example callback for when #curriculum section is added
    console.log('Navigating to curriculum section...');
  };

  return (
    <nav className="w-full border-b border-border bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 h-[64px] md:h-[76px] flex items-center justify-between">
        <div className="text-[18px] font-semibold text-main tracking-tight">
          incrementalvalue
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-[13px] font-medium text-secondary uppercase tracking-wide">
            COHORT 03
          </span>
          <button 
            onClick={onViewCurriculum}
            className="hidden md:flex h-9 px-4 items-center justify-center border border-border rounded-md text-[14px] font-semibold text-main hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            View curriculum
          </button>
          <button 
            onClick={onViewCurriculum}
            className="md:hidden flex items-center text-[14px] font-semibold text-accent focus:outline-none"
          >
            Curriculum ↗
          </button>
        </div>
      </div>
    </nav>
  );
}
