import React, { useEffect, useRef } from 'react';

export default function EnrolmentDialog() {
  const dialogRef = useRef(null);
  const triggerElementRef = useRef(null);

  useEffect(() => {
    const handleOpen = () => {
      triggerElementRef.current = document.activeElement;
      if (dialogRef.current) {
        dialogRef.current.showModal();
        document.body.style.overflow = 'hidden';
        window.dispatchEvent(new Event('enrolment-opened'));
      }
    };

    window.addEventListener('open-enrolment', handleOpen);
    return () => window.removeEventListener('open-enrolment', handleOpen);
  }, []);

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const onDialogClose = () => {
    document.body.style.overflow = '';
    window.dispatchEvent(new Event('enrolment-closed'));
    if (triggerElementRef.current) {
      triggerElementRef.current.focus();
    }
  };

  // Prevent clicks inside dialog from closing it, but clicks on backdrop will
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  return (
    <dialog 
      ref={dialogRef}
      onClose={onDialogClose}
      onClick={handleBackdropClick}
      className="backdrop:bg-[#11131880] backdrop:backdrop-blur-[3px] bg-white border border-[#DFE4ED] rounded-[10px] w-[min(620px,calc(100%-32px))] max-h-[90dvh] md:max-h-[88dvh] p-[23px] md:p-[29px] shadow-[0_20px_90px_rgba(17,19,24,0.13)] outline-none overflow-y-auto m-auto fixed inset-0"
    >
      <div className="flex flex-col h-full">
        
        {/* TOP ROW */}
        <div className="flex justify-between items-center gap-[10px]">
          <div className="font-mono text-[8px] tracking-widest text-[#626977]">
            D2C PERFORMANCE MARKETING / BATCH 03
          </div>
          <button 
            onClick={handleClose}
            aria-label="Close enrolment details"
            className="p-[4px] -mr-[4px] text-[#626977] hover:text-[#111318] focus:outline-none focus:ring-2 focus:ring-[#3155F5] rounded"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* TITLE */}
        <h2 className="font-bold text-[35px] md:text-[43px] tracking-[-1.3px] md:tracking-[-1.8px] leading-[1.1] text-[#111318] my-[24px]">
          Your next<br />four weekends.
        </h2>

        {/* ORDER SUMMARY */}
        <div className="flex justify-between items-center py-[15px] border-t border-b border-[#DFE4ED] mb-[24px]">
          <div>
            <div className="text-[13px] text-[#111318] font-medium">8 live sessions · 24 hours</div>
            <div className="text-[12px] text-[#626977] mt-[2px]">Saturday + Sunday</div>
          </div>
          <div className="font-bold text-[25px] md:text-[25px] tracking-[-0.5px] text-[#111318]">
            ₹2,999
          </div>
        </div>

        {/* STATUS COPY */}
        <p className="text-[13px] leading-[1.6] text-[#626977] m-0 mb-[24px]">
          Batch dates and checkout are being finalised. No payment or seat reservation can be made on this preview.
        </p>

        {/* INFORMATION BOX */}
        <div className="bg-[#F5F7FB] border border-[#E1E6EF] rounded-[6px] p-[18px] md:p-[22px] mb-[24px]">
          <div className="text-[13px] font-bold text-[#111318] mb-[10px]">
            Before you enrol, you’ll see:
          </div>
          <ul className="list-disc pl-[20px] text-[13px] text-[#526077] leading-[1.6] m-0 space-y-[6px]">
            <li>Start date, all eight session dates and IST timings.</li>
            <li>Teaching language and recording policy.</li>
            <li>Final payable total and refund terms.</li>
          </ul>
        </div>

        {/* ACTION */}
        <button 
          disabled
          className="w-full bg-[#E5E9F1] text-[#818BA3] font-medium text-[12px] min-h-[50px] rounded-[6px] cursor-not-allowed"
        >
          Enrolment opens after details are confirmed
        </button>

      </div>
    </dialog>
  );
}
