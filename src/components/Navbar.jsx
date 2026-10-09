import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-borders h-[100px] flex items-center">
      <div className="page-container flex items-center justify-between w-full">
        
        {/* LEFT: WORDMARK */}
        <div className="flex items-center">
          <div className="w-[30px] h-[31px] rounded-[6px] bg-blue flex items-center justify-center mr-[9px] text-white text-[22px] font-mono leading-none">
            i↗
          </div>
          <div className="text-[22px] tracking-[-1px]">
            <span className="font-bold">incremental</span>
            <span className="font-normal">value</span>
            <span className="text-blue">.</span>
          </div>
        </div>

        {/* RIGHT: NAVIGATION */}
        <div className="hidden md:flex items-center gap-[27px]">
          <a href="#curriculum" className="text-[13px] text-muted hover:text-main transition-colors">Curriculum</a>
          <button className="text-[13px] text-muted hover:text-main transition-colors">Your instructor</button>
          <button className="bg-blue border border-blue text-white text-[13px] rounded-[6px] min-h-[43px] px-[16px] py-[10px] flex items-center hover:bg-[#2443D3] transition-colors">
            <span>Join Batch 03</span>
            <span className="ml-[21px]">↗</span>
          </button>
        </div>
        
        {/* Mobile menu fallback for the button */}
        <div className="md:hidden">
          <button className="bg-blue text-white text-[13px] rounded-[6px] px-[16px] py-[10px] flex items-center">
            Join ↗
          </button>
        </div>

      </div>
    </nav>
  );
}
