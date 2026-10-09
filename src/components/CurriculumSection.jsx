import React from 'react';

export default function CurriculumSection() {
  const weeks = [
    {
      label: "W01",
      title: "Start with the business & the data",
      topic: "Unit economics · GTM · GA4 · Tracking QA",
      isOpen: true,
      sessions: [
        {
          label: "SATURDAY / SESSION 01",
          title: "What can this brand afford to acquire?",
          desc: "AOV, acquisition cost, contribution, discounts, shipping and RTO. Read ad results alongside the economics of delivered orders.",
          output: "A unit-economics sheet with clear assumptions."
        },
        {
          label: "SUNDAY / SESSION 02",
          title: "Can you trust the events you’re reading?",
          desc: "Map the buying journey. Inspect GTM/GA4 events, UTMs and Pixel/CAPI concepts. Practise checking whether an event fires correctly.",
          output: "A tracking map and event-validation checklist."
        }
      ]
    },
    {
      label: "W02",
      title: "Find the customer. Design the test.",
      topic: "Creative strategy · Meta · Google · AI research",
      isOpen: false,
      sessions: [
        {
          label: "SATURDAY / SESSION 03",
          title: "Turn customer objections into creative angles",
          desc: "Research the customer, offer and competition. Use AI to draft and organise insights, then check them against real evidence.",
          output: "A customer brief and three testable creative angles."
        },
        {
          label: "SUNDAY / SESSION 04",
          title: "Make campaign decisions you can explain",
          desc: "Meta and Google channel roles, account structure, testing and budget decisions. Compare platform reports with store data; examine attribution overlap and its limits.",
          output: "A campaign testing plan and performance explanation."
        }
      ]
    },
    {
      label: "W03",
      title: "Fix what happens after the click",
      topic: "CRO tactics · Checkout · Payments · COD & RTO",
      isOpen: false,
      sessions: [
        {
          label: "SATURDAY / SESSION 05",
          title: "Diagnose the page before redesigning it",
          desc: "Message match, offer clarity, product information, trust placement, mobile friction and checkout steps. Prioritise hypotheses and design tests with success measures.",
          output: "A CRO audit and a prioritised experiment backlog."
        },
        {
          label: "SUNDAY / SESSION 06",
          title: "Follow the order beyond the purchase event",
          desc: "Payment failures, prepaid/COD mix, verification, cancellations and delivery outcomes. Identify what marketing can fix and what needs operations support.",
          output: "An order-quality diagnosis and action checklist."
        }
      ]
    },
    {
      label: "W04",
      title: "Connect the system. Show your thinking.",
      topic: "Retention · n8n · Brand discovery · Applications",
      isOpen: false,
      sessions: [
        {
          label: "SATURDAY / SESSION 07",
          title: "Use AI and automation with a clear purpose",
          desc: "Map a retention flow and the roles of marketplaces and quick commerce. Walk through a small n8n workflow: structured inputs → AI-assisted summary → human review.",
          output: "A retention map and a guided workflow outline."
        },
        {
          label: "SUNDAY / SESSION 08",
          title: "Find relevant brands. Make a specific approach.",
          desc: "Research brands through public ad libraries, LinkedIn, store sites and career pages. Assess fit, identify the right public contact and write an evidence-led application or pitch. Review selected final case plans.",
          output: "A brand shortlist, personalised approach and 30-day action plan."
        }
      ]
    }
  ];

  const handleJoinClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Mock scroll to top hero / enrolment flow
  };

  return (
    <section id="curriculum" className="bg-[#F5F7FB] py-[43px] md:py-[60px] lg:py-[76px]">
      <div className="page-container">
        
        {/* TOP HEADING ROW */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-[16px] lg:gap-[35px] mb-[24px] lg:mb-[34px]">
          <div>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.7px] md:tracking-[1px] leading-[1.6] text-[#677080]">
              02 / THE FOUR-WEEK PLAN
            </div>
            <h2 className="font-bold text-[34px] md:text-[clamp(36px,4.3vw,55px)] leading-[1.1] md:leading-[1.08] tracking-[-1.5px] md:tracking-[-2.3px] text-[#111318] mt-[13px] md:mt-[15px]">
              Follow the journey.<br className="hidden md:block" />Build the decision-making.
            </h2>
          </div>
          <a 
            href="/syllabus.md" 
            download 
            className="text-[12px] md:text-[13px] text-[#626977] border-b border-[#CCD2DF] pb-[8px] flex items-center gap-[14px] hover:text-[#3155F5] hover:border-[#3155F5] transition-colors mt-[16px] lg:mt-0 w-fit"
          >
            Download the syllabus
            <span className="leading-none">↓</span>
          </a>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.65fr_1.35fr] gap-[22px] md:gap-[35px] lg:gap-[66px] items-start">
          
          {/* LEFT COLUMN — HOURS SUMMARY */}
          <div className="flex flex-col">
            
            {/* Mobile/Desktop Hours Summary Structure */}
            <div className="grid grid-cols-2 lg:flex lg:flex-col gap-x-[22px] gap-y-[8px] lg:gap-0 lg:border-none border-b border-[#DCE2ED] lg:pb-0 pb-[19px]">
              
              <div className="col-span-2 lg:col-span-1 font-mono text-[8px] lg:text-[9px] text-[#818B9C] lg:mb-0">
                ONE MONTH. CONNECTED LEARNING.
              </div>
              
              {/* 20h */}
              <div className="mt-[8px] lg:mt-[25px]">
                <div className="font-bold text-[46px] lg:text-[67px] tracking-[-2px] lg:tracking-[-3px] leading-[1.1] text-[#111318]">
                  20<span className="text-[24px] lg:text-[30px] text-[#3155F5] ml-[3px] font-bold">h</span>
                </div>
                <div className="text-[11px] lg:text-[13px] font-normal text-[#626977] leading-[1.5] mt-[4px] lg:mt-[7px]">
                  workshops &<br className="hidden lg:block"/> guided practice
                </div>
              </div>

              {/* 4h */}
              <div className="mt-[8px] lg:mt-[25px]">
                <div className="font-bold text-[46px] lg:text-[67px] tracking-[-2px] lg:tracking-[-3px] leading-[1.1] text-[#111318]">
                  4<span className="text-[24px] lg:text-[30px] text-[#3155F5] ml-[3px] font-bold">h</span>
                </div>
                <div className="text-[11px] lg:text-[13px] font-normal text-[#626977] leading-[1.5] mt-[4px] lg:mt-[7px]">
                  discussion &<br className="hidden lg:block"/> questions
                </div>
              </div>

              {/* Schedule Paragraph */}
              <p className="col-span-2 lg:col-span-1 text-[12px] lg:text-[13px] leading-[1.8] text-[#626977] mt-[9px] lg:mt-[29px] mb-0">
                Every Saturday and Sunday.<br/>
                The last 30 minutes of each session are reserved for discussion.
              </p>

            </div>

            {/* Scope Note */}
            <div className="text-[10px] lg:text-[11px] leading-[1.65] text-[#738095] lg:max-w-[290px] pt-[12px] lg:pt-[19px] lg:border-t lg:border-[#DCE2ED] mt-[6px] lg:mt-[23px]">
              Practical depth in D2C diagnosis, measurement and CRO. Marketplace context is included; specialist mastery of every platform is outside this cohort’s scope.
            </div>

          </div>

          {/* RIGHT COLUMN — WEEKLY ACCORDIONS */}
          <div className="flex flex-col">
            {weeks.map((week, index) => (
              <details 
                key={week.label} 
                open={week.isOpen}
                className={`group border-t border-[#CFD7E6] ${index === weeks.length - 1 ? 'border-b' : ''}`}
              >
                <summary className="flex items-center gap-[13px] lg:gap-[17px] py-[20px] lg:py-[23px] select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3155F5] focus-visible:ring-offset-2">
                  <div className="font-mono text-[9px] lg:text-[11px] text-[#3155F5] shrink-0">
                    {week.label}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-[17px] lg:text-[20px] leading-[1.2] tracking-[-0.3px] lg:tracking-[-0.4px] text-[#111318] m-0 mb-[7px]">
                      {week.title}
                    </h3>
                    <div className="text-[10px] lg:text-[11px] leading-[1.5] text-[#748094] block">
                      {week.topic}
                    </div>
                  </div>
                  <div className="expand-icon text-[23px] text-[#3155F5] font-normal transition-transform duration-200">
                    +
                  </div>
                </summary>
                
                {/* Expanded Body */}
                <div className="pb-[18px] lg:pb-[22px] lg:pl-[45px]">
                  {week.sessions.map((session, sIdx) => (
                    <div 
                      key={session.label} 
                      className={`bg-white border border-[#E3E8F0] rounded-[5px] p-[18px] lg:p-[20px] ${sIdx !== week.sessions.length - 1 ? 'mb-[11px]' : 'mb-0'}`}
                    >
                      <div className="font-mono text-[9px] text-[#7A8496]">
                        {session.label}
                      </div>
                      <h4 className="font-bold text-[16px] lg:text-[17px] leading-[1.3] tracking-[-0.2px] text-[#111318] mt-[10px] mb-[9px]">
                        {session.title}
                      </h4>
                      <p className="text-[13px] leading-[1.55] text-[#626977] m-0 mb-[15px]">
                        {session.desc}
                      </p>
                      
                      {/* Output Area */}
                      <div className="border-t border-[#E3E8F0] pt-[12px]">
                        <div className="font-mono text-[8px] text-[#3155F5] tracking-[0.5px]">
                          YOU BUILD
                        </div>
                        <div className="font-normal text-[12px] leading-[1.5] text-[#47556E] mt-[4px]">
                          {session.output}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>

        </div>

        {/* SECTION FOOTER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[16px] lg:gap-[24px] border-t border-[#DCE2ED] mt-[24px] lg:mt-[36px] pt-[18px] lg:pt-[25px]">
          <div className="text-[12px] lg:text-[13px] leading-[1.6] text-[#6D788B] lg:max-w-[620px]">
            <strong className="font-bold text-[#111318]">AI is a working layer.</strong> Use it for research, creative briefs and reporting—then verify the output.
          </div>
          <button 
            onClick={handleJoinClick}
            className="self-start lg:self-auto min-h-[43px] px-[16px] py-[10px] bg-[#3155F5] hover:bg-[#3155F5]/90 text-white text-[13px] font-medium rounded-[6px] flex items-center transition-colors focus:outline-none"
          >
            <span>Join the live cohort</span>
            <span className="ml-[21px]">↗</span>
          </button>
        </div>

      </div>
    </section>
  );
}
