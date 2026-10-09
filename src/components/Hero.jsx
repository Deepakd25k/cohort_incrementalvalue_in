import React, { useState } from 'react';
import Dialog from './Dialog';

export default function Hero({ config }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    price = '₹2,999',
    checkoutUrl = null,
    onViewCurriculum = () => console.log('Curriculum clicked')
  } = config || {};

  const handlePrimaryAction = () => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    } else {
      setIsDialogOpen(true);
    }
  };

  return (
    <main className="w-full flex-grow flex items-center bg-background">
      <div className="max-w-[1200px] mx-auto w-full px-5 md:px-6 pt-10 pb-12 md:py-16 lg:py-20 flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left Column - Copy */}
        <div className="w-full lg:w-[56%] flex flex-col pt-2 md:pt-4">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold text-secondary tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3155F5]"></span>
            D2C PERFORMANCE MARKETING · COHORT 03
          </div>
          
          {/* Headline */}
          <h1 className="text-[46px] sm:text-[56px] lg:text-[64px] font-bold text-main leading-[1.05] tracking-tight mb-6">
            Run the ads.<br/>
            Understand the<br/>
            <span className="text-[#3155F5]">whole business.</span>
          </h1>

          {/* Subheading 1 */}
          <p className="text-[18px] md:text-[20px] text-secondary leading-[1.5] max-w-[540px] mb-4">
            Learn to diagnose D2C growth—from acquisition and tracking to CRO, delivered orders and repeat purchases.
          </p>
          
          {/* Subheading 2 */}
          <p className="text-[15px] text-secondary max-w-[500px] mb-8">
            For marketers who know campaign basics and want to own the next decision.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col items-start gap-5 mb-10 w-full sm:w-auto">
            <button 
              onClick={handlePrimaryAction}
              className="w-full sm:w-auto h-[54px] md:h-[56px] px-8 bg-[#3155F5] hover:bg-[#3155F5]/90 text-white text-[16px] font-medium rounded-[6px] flex items-center justify-center sm:justify-start gap-2.5 transition-colors focus:outline-none"
            >
              Join Batch 03 — {price}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button 
              onClick={onViewCurriculum}
              className="text-[15px] font-medium text-main border-b border-border hover:border-main pb-1 transition-colors flex items-center gap-1.5"
            >
              See what you'll learn 
              <span className="text-[12px]">↓</span>
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-4">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[34px] font-bold text-main leading-none tracking-tight">4</span>
              <span className="text-[13px] text-secondary font-medium">weekends</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block"></div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[34px] font-bold text-main leading-none tracking-tight">8</span>
              <span className="text-[13px] text-secondary font-medium">live sessions</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block"></div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[34px] font-bold text-main leading-none tracking-tight">24</span>
              <span className="text-[13px] text-secondary font-medium">live hours</span>
            </div>
          </div>

          {/* Small Footer Text */}
          <div className="text-[12px] text-secondary leading-relaxed max-w-[400px]">
            Saturday + Sunday · 2.5h workshop + 30m discussion<br/>
            Start date & exact IST timings to be announced.
          </div>
        </div>

        {/* Right Column - Learning Map */}
        <div className="w-full lg:w-[44%] mt-6 lg:mt-0 lg:pt-4">
          <div className="bg-surface border border-border rounded-[16px] p-6 md:p-[32px]">
            <div className="text-[11px] font-bold text-secondary tracking-widest uppercase mb-3">
              WHAT YOU’LL CONNECT
            </div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-main leading-tight tracking-tight mb-6">
              From first click<br/>
              to delivered order.
            </h2>
            
            <div className="flex flex-col">
              {[
                { num: '01', title: 'Acquire', desc: 'Creative strategy + Meta & Google ads' },
                { num: '02', title: 'Measure', desc: 'Tracking + attribution + business metrics' },
                { num: '03', title: 'Convert', desc: 'CRO + landing pages + checkout' },
                { num: '04', title: 'Deliver', desc: 'Payments + RTO + delivered revenue' },
                { num: '05', title: 'Apply', desc: 'Find D2C brands + build your pitch' },
              ].map((item, idx) => (
                <div key={item.num} className={`py-4 flex gap-4 ${idx !== 0 ? 'border-t border-border/60' : 'border-t border-border/60'}`}>
                  <div className="text-[13px] font-bold text-[#3155F5] pt-0.5">{item.num}</div>
                  <div>
                    <div className="text-[15px] font-semibold text-main mb-0.5">— {item.title}</div>
                    <div className="text-[14px] text-secondary leading-snug">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 pt-5 border-t border-border">
              <div className="text-[15px] font-semibold text-main mb-1">
                AI + n8n, applied to the workflow.
              </div>
              <div className="text-[13px] text-secondary">
                Practical research, reporting and automation use cases.
              </div>
            </div>
          </div>
        </div>

      </div>

      <Dialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Cohort 03 enrolment"
        body="The fee is ₹2,999. Batch dates and registration details will be announced here."
      />
    </main>
  );
}
