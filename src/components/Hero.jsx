import React, { useState } from 'react';
import Dialog from './Dialog';

export default function Hero({ config }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Fallback defaults to ensure nothing breaks if missing
  const {
    price = '₹2,999',
    duration = '4 weekends',
    schedule = 'Saturday + Sunday',
    liveHours = '24 live hours', // Documenting assumption: 8 sessions x 3 hrs (2.5 teach + 0.5 disc)
    checkoutUrl = null,
    startDate = null,
    endDate = null,
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
      <div className="max-w-[1200px] mx-auto w-full px-5 md:px-6 pt-8 pb-10 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column - Copy */}
        <div className="w-full lg:w-[56%] flex flex-col">
          <div className="text-[12px] font-semibold text-secondary tracking-widest uppercase mb-4">
            D2C PERFORMANCE MARKETING · COHORT 03
          </div>
          
          <h1 className="text-[38px] sm:text-[44px] lg:text-[56px] xl:text-[64px] font-semibold text-main leading-[1.06] tracking-tight mb-6">
            Run the ads.<br/>
            Understand the<br/>
            <span className="text-accent">whole business.</span>
          </h1>

          <p className="text-[16px] lg:text-[18px] text-secondary leading-[1.6] max-w-[550px] mb-3">
            A live, practical cohort to connect ads, tracking, creatives, conversion and delivered revenue—so you can understand what’s holding a D2C brand back and decide what to fix next.
          </p>
          
          <p className="text-[14px] text-secondary mb-8">
            For marketers and freelancers who know the basics and want to work beyond Ads Manager.
          </p>

          {/* Course Facts */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] font-medium text-main mb-8">
            <span>{duration}</span>
            <span className="hidden md:inline-block w-px h-4 bg-border"></span>
            <span>{schedule}</span>
            <span className="hidden md:inline-block w-px h-4 bg-border"></span>
            <span>{liveHours}</span>
          </div>

          {/* Actions */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 mb-4">
            <button 
              onClick={handlePrimaryAction}
              className="w-full sm:w-auto h-[52px] md:h-[56px] px-6 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Join Cohort 03 — {price}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={onViewCurriculum}
              className="w-full sm:w-auto h-[52px] md:h-[56px] px-6 text-main font-semibold hover:bg-surface rounded-lg transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-border"
            >
              Explore the curriculum ↓
            </button>
          </div>
          <div className="text-[13px] text-secondary mb-10">
            Live teaching. Practical walkthroughs. Discussion every session.
          </div>

          {/* Instructor & Dates */}
          <div className="flex flex-col gap-1">
            <div className="text-[14px] font-semibold text-main">Led by Deepak Kumar</div>
            <div className="text-[14px] text-secondary">Founder, IncrementalValue</div>
            {startDate && endDate && (
              <div className="mt-4 text-[13px] font-medium text-main bg-surface px-3 py-1.5 rounded-md inline-block border border-border self-start">
                Starts {startDate} · Enrolment closes {endDate}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Learning Map */}
        <div className="w-full lg:w-[44%]">
          <div className="bg-surface border border-border rounded-[16px] p-5 md:p-[28px]">
            <div className="text-[11px] font-bold text-secondary tracking-widest uppercase mb-3">
              WHAT YOU’LL CONNECT
            </div>
            <h2 className="text-[28px] md:text-[32px] font-semibold text-main leading-tight tracking-tight mb-6">
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
                  <div className="text-[13px] font-bold text-accent pt-0.5">{item.num}</div>
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
