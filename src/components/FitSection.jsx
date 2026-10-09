import React, { useState } from 'react';

export default function FitSection() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const answers = [
    {
      id: 1,
      label: "Increase the campaign budget",
      feedback: "Start with the missing business outcome. More budget may increase the loss if cancellations or failed deliveries are the issue. First reconcile the order and delivery data."
    },
    {
      id: 2,
      label: "Compare cancellations & delivery outcomes",
      feedback: "A useful first check. Compare equivalent order cohorts and periods, then inspect cancellations, dispatch delays and delivery failures. Steady reported ROAS alone cannot explain delivered revenue."
    },
    {
      id: 3,
      label: "Replace all the creatives",
      feedback: "Creative quality may matter, but replacing everything skips the diagnosis. Start by checking whether the gap comes from order status, timing or delivery outcomes."
    }
  ];

  return (
    <section id="fit" aria-labelledby="fit-heading" className="bg-white py-[43px] md:py-[60px] lg:py-[76px]">
      <div className="page-container">
        
        {/* SECTION HEADING ROW */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[17px] md:gap-[35px] mb-[24px] lg:mb-[34px]">
          <div>
            {/* Eyebrow */}
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.7px] md:tracking-[1px] leading-[1.6] text-[#677080]">
              01 / SOUND FAMILIAR?
            </div>
            
            {/* Headline */}
            <h2 id="fit-heading" className="font-bold text-[34px] md:text-[clamp(36px,4.3vw,55px)] leading-[1.1] md:leading-[1.08] tracking-[-1.5px] md:tracking-[-2.3px] text-[#111318] mt-[13px] md:mt-[15px]">
              The dashboard changed.<br className="hidden md:block" />What would you do next?
            </h2>
          </div>
          
          {/* Supporting Copy */}
          <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#626977] m-0 mb-0 md:mb-[3px] max-w-[340px]">
            You know where the buttons are.<br className="hidden md:block" />Now build the judgement behind<br className="hidden md:block" />your next recommendation.
          </p>
        </div>

        {/* MAIN TWO-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px] md:gap-[35px] lg:gap-[72px] items-start">
          
          {/* LEFT COLUMN — AUDIENCE LIST */}
          <div className="flex flex-col">
            {[
              {
                num: '01',
                title: 'Agency & in-house marketers',
                desc: 'Explain what is happening across the account, the store and the order journey.'
              },
              {
                num: '02',
                title: 'Freelancers working with D2C',
                desc: 'Turn a client’s ‘sales are down’ into a structured diagnosis and action plan.'
              },
              {
                num: '03',
                title: 'Marketers moving into D2C',
                desc: 'Connect your campaign knowledge to margins, checkout, delivery and retention.'
              }
            ].map((row, idx) => (
              <div key={row.num} className={`flex items-start gap-[18px] py-[15px] md:py-[19px] border-b border-[#DFE3EB] ${idx === 0 ? 'pt-[5px]' : ''}`}>
                <div className="font-mono text-[10px] text-[#3155F5] mt-[5px] shrink-0">{row.num}</div>
                <div>
                  <h3 className="font-bold text-[17px] md:text-[18px] text-[#111318] m-0 mb-[8px]">{row.title}</h3>
                  <p className="text-[14px] md:text-[15px] text-[#626977] leading-[1.55] m-0">{row.desc}</p>
                </div>
              </div>
            ))}
            
            {/* PREREQUISITE NOTE */}
            <div className="text-[11px] md:text-[12px] leading-[1.6] text-[#626977] mt-[17px] md:mt-[21px] pl-[30px] md:pl-[31px]">
              <strong className="font-bold text-[#111318]">Before you join:</strong> be familiar with campaign basics and comfortable working in a spreadsheet. This cohort builds on that foundation.
            </div>
          </div>

          {/* RIGHT COLUMN — CLASSROOM QUESTION CARD */}
          <div className="bg-[#F5F7FB] border border-[#E5E9F1] rounded-[8px] p-[21px] lg:p-[27px]">
            
            {/* Top Label Row */}
            <div className="flex justify-between items-center gap-[8px] font-mono text-[7px] md:text-[8px]">
              <div className="text-[#657089] tracking-[0.5px] md:tracking-[0px]">TRY A CLASSROOM QUESTION</div>
              <div className="text-[#8991A0] tracking-[0.5px] md:tracking-[0.2px]">ILLUSTRATIVE CASE</div>
            </div>

            {/* Question */}
            <h3 className="font-bold text-[26px] md:text-[27px] tracking-[-0.8px] leading-[1.17] text-[#111318] mt-[20px] md:mt-[22px] mb-[12px]">
              ROAS is steady.<br/>Delivered revenue is down.
            </h3>
            
            <p className="text-[12px] md:text-[14px] text-[#626977] mb-[16px]">
              Which is the most useful first check?
            </p>

            {/* Answer Buttons */}
            <div className="flex flex-col gap-[8px]">
              {answers.map(ans => {
                const isSelected = selectedAnswer === ans.id;
                return (
                  <button
                    key={ans.id}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedAnswer(ans.id)}
                    className={`min-h-[46px] md:min-h-0 flex items-center justify-between gap-[15px] bg-white border rounded-[4px] p-[13px] text-left text-[12px] md:text-[13px] leading-[1.4] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3155F5] focus:ring-offset-1 ${
                      isSelected 
                        ? 'border-[#3155F5] text-[#3155F5]' 
                        : 'border-[#DFE3EB] text-[#4E5869] hover:border-[#3155F5] hover:text-[#3155F5]'
                    }`}
                  >
                    <span>{ans.label}</span>
                    <span aria-hidden="true" className="shrink-0 text-[#3155F5]">↗</span>
                  </button>
                )
              })}
            </div>

            {/* Interaction Feedback */}
            <div 
              role="status" 
              aria-live="polite"
              className={`text-[11px] md:text-[12px] leading-[1.55] min-h-[58px] md:min-h-[70px] mt-[17px] transition-colors ${
                selectedAnswer ? 'text-[#2443B7]' : 'text-[#697489]'
              }`}
            >
              {selectedAnswer 
                ? answers.find(a => a.id === selectedAnswer).feedback 
                : "Choose a starting point. See the reasoning."}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
