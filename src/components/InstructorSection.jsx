import React from 'react';

export default function InstructorSection() {
  return (
    <section id="instructor" aria-labelledby="instructor-heading" className="bg-[#F5F7FB] py-[43px] md:py-[60px] lg:py-[76px]">
      <div className="page-container">
        
        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] gap-[29px] md:gap-[40px] lg:gap-[80px] items-center">
          
          {/* LEFT COLUMN — BLUE INSTRUCTOR CARD */}
          <div className="bg-[#3155F5] text-white p-[24px] lg:p-[29px] rounded-[6px] grid grid-cols-[1fr_auto] md:flex md:flex-col gap-x-[12px]">
            
            {/* Top Label */}
            <div className="col-span-2 md:col-span-1 font-mono text-[9px] tracking-[1px] text-[#CBD5FF]">
              YOUR INSTRUCTOR
            </div>

            {/* Desktop Monogram */}
            <div aria-hidden="true" className="hidden md:block font-bold text-[126px] tracking-[-11px] leading-none mt-[33px] mb-[35px]">
              dk<span className="font-normal text-[90px] tracking-normal ml-[21px]">↗</span>
            </div>

            {/* Name */}
            <h3 className="col-start-1 row-start-2 self-end font-bold text-[24px] md:text-[25px] tracking-[-0.5px] mt-[26px] md:mt-0 mb-[4px] md:mb-[5px]">
              Deepak Kumar
            </h3>

            {/* Role */}
            <div className="col-start-1 row-start-3 font-normal text-[12px] md:text-[13px] text-[#D9E1FF] leading-[1.55] m-0">
              Founder, IncrementalValue
            </div>

            {/* Mobile Monogram */}
            <div aria-hidden="true" className="md:hidden col-start-2 row-start-2 row-span-2 self-center font-bold text-[67px] tracking-[-5px] leading-none mt-[21px]">
              dk<span className="font-normal text-[47px] tracking-normal ml-[8px]">↗</span>
            </div>

            {/* Metrics */}
            <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-[15px] border-t border-[#FFFFFF35] pt-[19px] md:pt-[22px] mt-[21px] md:mt-[25px]">
              <div>
                <span className="block font-bold text-[27px] md:text-[29px] tracking-[-1px]">₹10Cr</span>
                <span className="block font-normal text-[10px] text-[#D7E0FF] mt-[6px]">D2C ad spend managed</span>
              </div>
              <div>
                <span className="block font-bold text-[27px] md:text-[29px] tracking-[-1px]">5 years</span>
                <span className="block font-normal text-[10px] text-[#D7E0FF] mt-[6px]">of experience</span>
              </div>
            </div>

            {/* Footnote */}
            <div className="col-span-2 md:col-span-1 font-normal text-[9px] text-[#CCD6FB] mt-[17px] md:mt-[23px] leading-[1.5]">
              Career experience · Figures supplied by the instructor.
            </div>

          </div>

          {/* RIGHT COLUMN — BACKGROUND AND APPROACH */}
          <div className="flex flex-col">
            
            {/* Eyebrow */}
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.7px] md:tracking-[1px] leading-[1.6] text-[#677080]">
              04 / LEARN FROM THE WORK
            </div>

            {/* Headline */}
            <h2 id="instructor-heading" className="font-bold text-[34px] md:text-[38px] lg:text-[46px] leading-[1.1] md:leading-[1.08] tracking-[-1.5px] md:tracking-[-2.3px] text-[#111318] mt-[13px] md:mt-[15px] mb-[20px] md:mb-[23px]">
              Engineering background.<br />
              Commercial questions.
            </h2>

            {/* Paragraphs */}
            <p className="text-[15px] md:text-[16px] text-[#626977] leading-[1.55] m-0 mb-[16px]">
              I moved from software engineering into performance marketing. That background shapes how I approach a D2C problem: inspect the system, find the gap and decide what to fix.
            </p>
            <p className="text-[15px] md:text-[16px] text-[#626977] leading-[1.55] m-0 mb-[16px]">
              In this cohort, we’ll connect the ad account with the store, tracking and order journey. You’ll learn to explain your decisions using the available evidence.
            </p>

            {/* Teaching Statement */}
            <div className="border-l-[2px] border-[#3155F5] pl-[19px] my-[22px] md:my-[26px] text-[17px] md:text-[19px] leading-[1.55]">
              <div className="text-[#697589] font-normal">
                “What happened?” is the start.
              </div>
              <div className="text-[#111318] font-normal">
                “What should we do next—and why?”<br className="hidden md:block" />
                is the skill we’ll practise.
              </div>
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-[6px] mt-[20px] md:mt-[23px] mb-[16px]">
              {['Performance marketing', 'Tracking & measurement', 'D2C execution'].map(tag => (
                <div key={tag} className="font-normal text-[9px] md:text-[10px] text-[#697589] border border-[#D6DEEB] rounded-[3px] px-[8px] py-[7px] bg-transparent leading-none">
                  {tag}
                </div>
              ))}
            </div>

            {/* Final Text Link */}
            <a 
              href="#fit" 
              className="inline-flex items-center gap-[14px] text-[12px] md:text-[13px] text-[#111318] border-b border-[#CCD2DF] pb-[8px] mt-[4px] hover:text-[#3155F5] hover:border-[#3155F5] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3155F5] self-start"
            >
              Try the classroom question
              <span className="leading-none text-[16px]">↗</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
