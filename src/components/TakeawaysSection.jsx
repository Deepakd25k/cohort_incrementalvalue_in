import React from 'react';

export default function TakeawaysSection() {
  const deliverables = [
    { num: '01', title: 'Business economics', ext: '.sheet' },
    { num: '02', title: 'Tracking & CRO audit', ext: '.checklist' },
    { num: '03', title: 'Creative & campaign plan', ext: '.brief' },
    { num: '04', title: 'AI + n8n workflow outline', ext: '.workflow' },
    { num: '05', title: 'Brand shortlist & pitch', ext: '.document' },
    { num: '06', title: '30-day action plan', ext: '.roadmap' }
  ];

  const skills = [
    {
      title: 'Apply CRO with a reason',
      desc: 'Turn observations into prioritised tests. Define what success means before changing the page.'
    },
    {
      title: 'Make AI useful to the work',
      desc: 'Build better briefs, structure reports and understand a simple n8n workflow—with a human review step.'
    },
    {
      title: 'Know which brands to approach',
      desc: 'Find relevant opportunities, assess fit and personalise your application or pitch around an observed problem.'
    }
  ];

  return (
    <section id="takeaways" aria-labelledby="takeaways-heading" className="bg-white py-[43px] md:py-[60px] lg:py-[76px]">
      <div className="page-container">
        
        {/* SECTION HEADING ROW */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-[17px] md:gap-[35px] mb-[24px] lg:mb-[34px]">
          <div>
            {/* Eyebrow */}
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.7px] md:tracking-[1px] leading-[1.6] text-[#677080]">
              03 / SOMETHING TO SHOW FOR IT
            </div>
            
            {/* Headline */}
            <h2 id="takeaways-heading" className="font-bold text-[34px] md:text-[clamp(36px,4.3vw,55px)] leading-[1.1] md:leading-[1.08] tracking-[-1.5px] md:tracking-[-2.3px] text-[#111318] mt-[13px] md:mt-[15px]">
              Build the work<br />
              you want to be hired for.
            </h2>
          </div>
          
          {/* Supporting Copy */}
          <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#626977] m-0 mb-0 md:mb-[3px] mt-[17px] md:mt-0">
            Develop a practical D2C case file.<br className="hidden md:block" />
            Use it to explain your thinking<br className="hidden md:block" />
            in an interview or a client conversation.
          </p>
        </div>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-[1.03fr_0.97fr] gap-[29px] md:gap-[35px] lg:gap-[68px] items-start">
          
          {/* LEFT COLUMN — D2C CASE FILE */}
          <div className="border border-[#DCE3EE] rounded-[6px] p-[20px] lg:p-[28px] bg-gradient-to-b from-[#FFFFFF] to-[#FAFBFD]">
            
            {/* Top Row */}
            <div className="flex justify-between items-center gap-[15px]">
              <div className="font-mono text-[8px] lg:text-[9px] text-[#697589] tracking-[1px]">
                YOUR D2C CASE FILE
              </div>
              <div className="font-mono text-[6px] lg:text-[7px] text-[#808B9B] tracking-[0.4px] border border-[#E1E6EF] rounded-[3px] py-[4px] px-[6px]">
                LEARNING PROJECT
              </div>
            </div>

            {/* Main Panel Copy */}
            <div className="font-normal text-[25px] lg:text-[28px] tracking-[-0.8px] leading-[1.25] my-[24px] lg:my-[31px] mb-[24px] lg:mb-[28px]">
              <div className="text-[#111318]">A clear answer to:</div>
              <div className="text-[#3155F5]">“What would you fix first?”</div>
            </div>

            {/* Case File Rows */}
            <ul className="list-none p-0 m-0">
              {deliverables.map((item, idx) => (
                <li key={item.num} className="flex items-center gap-[12px] lg:gap-[14px] py-[13px] lg:py-[15px] border-t border-[#E3E8F0]">
                  <span className="font-mono text-[9px] text-[#8B98AF] shrink-0">{item.num}</span>
                  <span className="font-normal text-[13px] lg:text-[14px] text-[#111318] flex-1">{item.title}</span>
                  <span className="font-mono text-[7px] lg:text-[8px] text-[#8994A6] tracking-tight shrink-0">{item.ext}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Note */}
            <div className="text-[10px] text-[#8A94A4] mt-[19px] leading-[1.55]">
              Guided work using a teaching case. Your final output depends on participation and practice.
            </div>

          </div>

          {/* RIGHT COLUMN — PRACTICAL SKILLS */}
          <div className="flex flex-col">
            
            {/* Skill Blocks */}
            <div className="flex flex-col">
              {skills.map((skill, idx) => (
                <div key={idx} className="relative pl-[34px] lg:pl-[39px] pb-[18px] lg:pb-[22px] mb-[18px] lg:mb-[19px] border-b border-[#DFE3EB]">
                  <span aria-hidden="true" className="absolute left-0 top-[3px] text-[24px] text-[#3155F5] leading-none">
                    ↗
                  </span>
                  <h3 className="font-bold text-[20px] lg:text-[22px] text-[#111318] tracking-[-0.5px] mb-[11px] m-0">
                    {skill.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] text-[#626977] leading-[1.55] m-0">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Practice Note */}
            <div className="bg-[#F5F7FB] p-[17px_20px] rounded-[4px] mt-[10px] lg:mt-0">
              <div className="text-[14px] font-bold text-[#111318]">
                Come prepared to participate.
              </div>
              <p className="text-[12px] text-[#626977] leading-[1.6] mt-[7px] mb-0">
                Bring a laptop and your questions. Plan for 1–2 hours of practice between weekends. This is a proposed practice commitment, outside the 24 live hours.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
