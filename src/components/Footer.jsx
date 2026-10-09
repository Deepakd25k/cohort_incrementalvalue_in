import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#DFE3EB] pb-[95px] md:pb-0">
      <div className="page-container py-[26px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[13px] md:gap-[20px] flex-wrap">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-auto flex-1 gap-[13px] md:gap-[20px]">
            {/* Wordmark */}
            <a 
              href="#home" 
              className="font-bold text-[18px] lg:text-[19px] tracking-[-1px] text-[#111318] hover:text-[#3155F5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3155F5] focus:ring-offset-2 rounded"
            >
              incremental<span className="font-normal">value.</span>
            </a>
            
            {/* Tagline */}
            <div className="text-[11px] lg:text-[12px] text-[#7A8597]">
              Learn the whole journey.
            </div>
          </div>

          {/* Small print */}
          <div className="w-full text-[9px] lg:text-[10px] text-[#929BAB] leading-[1.6]">
            © {currentYear} IncrementalValue · Cohort page preview. Dates and checkout are being finalised.
          </div>

        </div>
      </div>
    </footer>
  );
}
