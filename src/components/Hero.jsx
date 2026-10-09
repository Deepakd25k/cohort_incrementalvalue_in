import React from 'react';

export default function Hero() {
  return (
    <main className="w-full bg-page">
      <div className="page-container hero-grid pt-[65px]">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          
          {/* Eyebrow */}
          <div className="font-mono text-[10px] tracking-[1px] leading-[1.6] text-[#677080] flex items-center gap-[8px]">
            <div className="w-[6px] h-[6px] bg-blue rounded-full shrink-0"></div>
            D2C PERFORMANCE MARKETING · COHORT 03
          </div>

          {/* Headline */}
          <h1 className="font-bold text-[44px] md:text-[clamp(52px,5.65vw,76px)] leading-[1.03] tracking-[-3px] md:tracking-[-3.9px] mt-[23px] mb-[24px]">
            Run the ads.<br/>
            Understand the<br/>
            <span className="text-blue font-normal not-italic">whole business.</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-[19px] leading-[1.5] text-[#505A6B] max-w-[555px] mb-[15px]">
            Learn to diagnose D2C growth—from acquisition and tracking to CRO, delivered orders and repeat purchases.
          </p>

          {/* Audience Line */}
          <p className="text-[14px] leading-[1.5] text-muted max-w-[430px] mb-[25px]">
            For marketers who know campaign basics and want to own the next decision.
          </p>

          {/* CTA Row */}
          <div className="flex items-center gap-[21px] flex-wrap">
            <button className="min-h-[56px] px-[23px] py-[17px] bg-blue border border-blue text-white text-[15px] rounded-[6px] font-normal flex items-center hover:bg-[#2443D3] hover:-translate-y-[2px] transition-transform duration-150">
              Join Batch 03 — ₹2,999
              <span className="ml-[26px] text-[21px] leading-none">↗</span>
            </button>
            <a href="#curriculum" className="text-[13px] text-main border-b border-[#CCD2DF] pb-[8px] flex items-center gap-[14px]">
              See what you’ll learn
              <span className="leading-none">↓</span>
            </a>
          </div>

          {/* Course Facts */}
          <div className="flex flex-row justify-between lg:justify-start items-baseline mt-[29px] mb-[18px] w-full lg:w-auto">
            <div className="flex items-baseline">
              <span className="text-[22px] sm:text-[27px] font-bold tracking-[-0.7px]">4</span>
              <span className="text-[11px] sm:text-[12px] text-muted ml-[4px] sm:ml-[7px]">weekends</span>
            </div>
            <div className="w-px h-[20px] sm:h-[27px] bg-borders mx-[10px] lg:mx-[25px]"></div>
            
            <div className="flex items-baseline">
              <span className="text-[22px] sm:text-[27px] font-bold tracking-[-0.7px]">8</span>
              <span className="text-[11px] sm:text-[12px] text-muted ml-[4px] sm:ml-[7px]">live sessions</span>
            </div>
            <div className="w-px h-[20px] sm:h-[27px] bg-borders mx-[10px] lg:mx-[25px]"></div>
            
            <div className="flex items-baseline">
              <span className="text-[22px] sm:text-[27px] font-bold tracking-[-0.7px]">24</span>
              <span className="text-[11px] sm:text-[12px] text-muted ml-[4px] sm:ml-[7px]">live hours</span>
            </div>
          </div>

          {/* Schedule Note */}
          <div className="text-[11px] leading-[1.7] mb-[27px]">
            <div className="text-[#687182]">Saturday + Sunday · 2.5h workshop + 30m discussion</div>
            <div className="text-[#7E8796]">Start date & exact IST timings to be announced.</div>
          </div>
        </div>

        {/* RIGHT COLUMN - FIELDNOTES CARD */}
        <div className="relative w-full lg:w-auto lg:self-start mt-[8px] mb-[42px] p-[24px] lg:p-[28px] pb-[22px] bg-cardBg border border-cardBorder rounded-[8px]">
          
          {/* Top Row */}
          <div className="flex justify-between items-center">
            <div className="font-mono text-[9px] text-[#707EAA] tracking-[1px]">THE D2C OPERATOR’S</div>
            <div className="text-[54px] font-bold text-blue tracking-[-3px] leading-[1]">03</div>
          </div>

          {/* Card Headline */}
          <h2 className="text-[35px] font-bold leading-[1.08] tracking-[-1.3px] mt-[11px] mb-[27px]">
            Fieldnotes<br/>for the real work.
          </h2>

          {/* Learning Rows */}
          <div className="flex flex-col">
            {[
              { num: '01', title: 'Acquire', desc: 'Audience · Offer · Creative' },
              { num: '02', title: 'Measure', desc: 'Tracking · Attribution · Economics' },
              { num: '03', title: 'Convert', desc: 'Product page · Checkout · CRO' },
              { num: '04', title: 'Deliver', desc: 'Order quality · COD · RTO' },
              { num: '05', title: 'Retain', desc: 'Repeat purchase · WhatsApp' },
            ].map((item, idx) => (
              <div key={item.num} className="grid grid-cols-[24px_1fr] gap-x-[11px] gap-y-[3px] py-[15px] border-t border-cardSep">
                <div className="font-mono text-[10px] text-[#8B99C3] pt-[3px] row-span-2">{item.num}</div>
                <div className="text-[18px] font-normal leading-none">{item.title}</div>
                <div className="text-[11px] text-[#798298]">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Card Footer */}
          <div className="flex justify-between items-center border-t border-cardSep pt-[19px] mt-[3px]">
            <div className="font-mono text-[8px] tracking-[0.4px] text-blue">WITH AI + n8n IN THE WORKFLOW</div>
            <div className="text-[24px] text-blue leading-none">↗</div>
          </div>

          {/* Green Sticker */}
          <div className="absolute -right-[10px] md:-right-[22px] -bottom-[35px] flex items-center gap-[12px] px-[24px] py-[15px] bg-stickerBg border border-stickerBorder rounded-[3px] -rotate-4 shadow-[0_6px_14px_rgba(36,54,28,0.03)] text-[12px] leading-[1.5] z-10">
            <div className="w-[7px] h-[7px] rounded-full shrink-0 bg-[#517925]"></div>
            <div>
              <span className="font-normal">Learn it live. </span>
              <span className="font-bold">Ask why. Then apply it.</span>
            </div>
          </div>

        </div>

        {/* BOTTOM SUBJECT STRIP */}
        <div className="lg:col-span-2 flex flex-wrap justify-between items-center gap-[15px] py-[20px] mt-[31px] border-y border-borders font-mono text-[9px] tracking-[1px] text-[#707A8B]">
          <span>CAMPAIGNS</span>
          <span className="text-blue text-[16px] font-normal leading-none">+</span>
          <span>CRO</span>
          <span className="text-blue text-[16px] font-normal leading-none">+</span>
          <span>MEASUREMENT</span>
          <span className="text-blue text-[16px] font-normal leading-none">+</span>
          <span>AI & n8n</span>
          <span className="text-blue text-[16px] font-normal leading-none">+</span>
          <span>BRAND OUTREACH</span>
        </div>

      </div>
    </main>
  );
}
