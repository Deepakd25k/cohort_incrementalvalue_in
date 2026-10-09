import React from 'react';

export default function Navbar() {
  const onJoinClick = () => {
    // Scroll to pricing or open modal
    console.log('Join clicked');
  };

  return (
    <nav className="w-full border-b border-border bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 h-[72px] flex items-center justify-between">
        
        {/* Logo Left */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#3155F5] rounded-[6px] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7H17V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="text-[19px] font-bold text-main tracking-tight">
            incrementalvalue.
          </div>
        </div>

        {/* Action Right */}
        <div>
          <button 
            onClick={onJoinClick}
            className="h-[38px] px-4 md:px-5 bg-[#3155F5] hover:bg-[#3155F5]/90 text-white text-[14px] font-medium rounded-[6px] flex items-center gap-2 transition-colors focus:outline-none"
          >
            Join Batch 03
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}
