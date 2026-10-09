import React from 'react';
import { openEnrolment } from '../utils/events';

export default function JoinSection() {
  const faqs = [
    {
      q: "Who is this cohort for?",
      a: "Agency and in-house marketers, freelancers and people moving into D2C who already know campaign basics. You should be comfortable with common ad metrics and a spreadsheet."
    },
    {
      q: "I’m a complete beginner. Can I join?",
      a: "This cohort assumes basic campaign familiarity. It moves into business diagnosis, measurement and execution decisions rather than starting from zero. Prerequisite guidance will be confirmed before enrolment opens."
    },
    {
      q: "How are the 24 hours structured?",
      a: "Eight sessions across four weekends. Each session includes 2.5 hours of workshop and guided work, followed by 30 minutes of discussion. That is 20 workshop hours and 4 discussion hours in total."
    },
    {
      q: "Will I learn practical CRO tactics?",
      a: "Yes. We cover message match, offer clarity, product information, trust placement, mobile friction, checkout and payments. You’ll practise turning an observation into a testable hypothesis and choosing a success measure."
    },
    {
      q: "What will we do with AI and n8n?",
      a: "Use AI for research, creative briefs and reporting drafts, then validate the output. The n8n component is a guided small-workflow walkthrough with structured inputs and human review—not a full automation-engineering course."
    },
    {
      q: "Will you show how to find D2C brands?",
      a: "Yes. We cover public brand research, fit assessment, relevant job or client opportunities, and a personalised application or pitch. This does not include guaranteed leads, interviews, clients or placements."
    },
    {
      q: "Do I need my own brand or an ad budget?",
      a: "The planned core exercises use a teaching case and demo data; running your own paid campaigns is not required. Any optional paid tool or API requirements will be listed before payment."
    },
    {
      q: "Are Amazon and Blinkit taught in depth?",
      a: "We discuss their roles in a wider D2C growth plan and how to interpret relevant business data. The cohort is not specialist end-to-end training in every marketplace platform."
    },
    {
      q: "Will recordings or personal account reviews be included?",
      a: "Sessions are live. Recording and catch-up policies are still being finalised. Discussion time includes selected questions and examples; individual account reviews are not currently promised."
    },
    {
      q: "What about certificates and refunds?",
      a: "Certificate availability, refund terms and final tax treatment will be confirmed before checkout opens. No job placement or income guarantee is part of this offer."
    }
  ];

  return (
    <section id="join" aria-labelledby="join-heading" className="bg-white py-[43px] md:py-[60px] lg:py-[76px]">
      <div className="page-container">
        
        {/* SECTION HEADING ROW */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[17px] md:gap-[35px] mb-[24px] lg:mb-[34px]">
          <div>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.7px] md:tracking-[1px] leading-[1.6] text-[#677080]">
              05 / YOUR NEXT FOUR WEEKENDS
            </div>
            <h2 id="join-heading" className="font-bold text-[34px] md:text-[clamp(36px,4.3vw,55px)] leading-[1.1] md:leading-[1.08] tracking-[-1.5px] md:tracking-[-2.3px] text-[#111318] mt-[13px] md:mt-[15px]">
              Bring your questions.<br />Build your next level.
            </h2>
          </div>
          <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#626977] m-0 mb-0 md:mb-[3px] mt-[17px] md:mt-0">
            Learn with the live batch.<br className="hidden md:block" />
            Put your reasoning into practice.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-[34px] md:gap-[35px] lg:gap-[72px] items-start">
          
          {/* LEFT COLUMN — PRICE CARD */}
          <div className="border border-[#CBD6FA] rounded-[8px] p-[23px] lg:p-[28px] bg-[#F9FAFF]">
            
            {/* Top Row */}
            <div className="flex justify-between items-center gap-[10px]">
              <div className="font-mono text-[8px] text-[#68758F] tracking-[0.5px]">
                D2C PERFORMANCE MARKETING
              </div>
              <div className="font-mono text-[8px] text-[#3155F5] bg-[#E5EBFF] rounded-[3px] py-[6px] px-[6px] whitespace-nowrap">
                BATCH 03
              </div>
            </div>

            {/* Price */}
            <div className="mt-[27px] lg:mt-[30px] mb-[12px]">
              <div className="font-bold text-[65px] lg:text-[70px] tracking-[-3px] leading-none text-[#111318]">
                ₹2,999
              </div>
              <div className="font-normal text-[11px] tracking-normal text-[#818DA3] mt-[9px]">
                course fee
              </div>
            </div>

            {/* Introduction */}
            <div className="font-normal text-[17px] leading-[1.45] text-[#111318] mt-[20px]">
              One connected learning journey.<br />From first ad to repeat order.
            </div>

            {/* Inclusions */}
            <ul className="list-none p-0 m-0 my-[23px]">
              {[
                "4 weekends · 8 live sessions",
                "20 workshop hours + 4 discussion hours",
                "CRO, tracking & practical campaign decisions",
                "AI, n8n & brand outreach exercises",
                "A guided D2C case file to develop"
              ].map((item, idx) => (
                <li key={idx} className="relative py-[9px] pl-[22px] text-[13px] text-[#526077] leading-[1.4]">
                  {/* Custom Checkmark */}
                  <svg aria-hidden="true" className="absolute left-0 top-1/2 -translate-y-1/2" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.6667 3.5L5.25001 9.91667L2.33334 7" stroke="#3155F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Schedule Block */}
            <div className="border-t border-[#DAE2F7] pt-[18px] my-[20px]">
              <div className="font-mono text-[9px] text-[#3155F5]">
                SATURDAY + SUNDAY
              </div>
              <div className="block font-bold text-[14px] text-[#111318] my-[8px]">
                2.5h workshop + 30m discussion
              </div>
              <div className="text-[11px] text-[#7C879B] leading-[1.55] m-0">
                Start date, exact IST timings and teaching language will be confirmed before payment.
              </div>
            </div>

            {/* Primary Button */}
            <button 
              onClick={openEnrolment}
              className="w-full bg-[#3155F5] hover:bg-[#2A4AD0] text-white font-medium text-[15px] min-h-[56px] px-[23px] py-[17px] rounded-[6px] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#3155F5] focus:ring-offset-2"
            >
              <span>Join Batch 03 — ₹2,999</span>
              <span className="ml-[12px] text-[18px] leading-none">↗</span>
            </button>

            {/* Below-Button Note */}
            <div className="text-[10px] text-center text-[#808BA1] leading-[1.6] mt-[14px]">
              Enrolment checkout is not open yet.<br />Tax treatment and refund terms will be shown before purchase.
            </div>

          </div>

          {/* RIGHT COLUMN — FAQs */}
          <div className="flex flex-col">
            <h3 className="font-bold text-[22px] lg:text-[24px] tracking-[-0.6px] text-[#111318] m-0 mt-[4px] mb-[21px]">
              A few things worth knowing.
            </h3>
            
            <div className="flex flex-col">
              {faqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className={`group border-t border-[#DFE4ED] ${idx === faqs.length - 1 ? 'border-b' : ''}`}
                >
                  <summary className="flex items-center justify-between gap-[20px] py-[17px] lg:py-[18px] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3155F5] focus-visible:ring-offset-2 select-none">
                    <span className="font-normal text-[14px] lg:text-[15px] leading-[1.4] text-[#111318]">
                      {faq.q}
                    </span>
                    <span className="expand-icon text-[20px] text-[#3155F5] font-normal transition-transform duration-200 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="text-[13px] lg:text-[14px] text-[#626977] leading-[1.55] m-0 pr-[25px] pb-[18px]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
