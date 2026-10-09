import React, { useEffect, useState } from 'react';
import { openEnrolment } from '../utils/events';

export default function StickyEnrolmentBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    window.addEventListener('enrolment-opened', handleModalOpen);
    window.addEventListener('enrolment-closed', handleModalClose);

    return () => {
      window.removeEventListener('enrolment-opened', handleModalOpen);
      window.removeEventListener('enrolment-closed', handleModalClose);
    };
  }, []);

  useEffect(() => {
    // Only applies on mobile viewport
    const checkVisibility = () => {
      if (window.innerWidth > 720 || isModalOpen) {
        setIsVisible(false);
        return;
      }
      
      const hero = document.getElementById('hero');
      const join = document.getElementById('join');
      
      // Calculate intersection manually since scroll might be fast
      const heroRect = hero?.getBoundingClientRect();
      const joinRect = join?.getBoundingClientRect();
      
      const viewportHeight = window.innerHeight;
      
      // Hero is visible if its bottom is greater than 0
      const isHeroVisible = heroRect && (heroRect.bottom > 0 && heroRect.top < viewportHeight);
      
      // Join is visible if its top is less than viewport height
      const isJoinVisible = joinRect && (joinRect.top < viewportHeight && joinRect.bottom > 0);

      setIsVisible(!isHeroVisible && !isJoinVisible);
    };

    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [isModalOpen]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#FFFFFFF5] backdrop-blur-[10px] border-t border-[#DCE2ED] px-[20px] py-[12px] pb-[calc(12px+env(safe-area-inset-bottom))] flex items-center justify-between gap-[15px]"
    >
      <div>
        <div className="font-bold text-[21px] tracking-[-0.5px] text-[#111318]">₹2,999</div>
        <div className="font-normal text-[9px] text-[#778296] mt-[3px]">Batch 03 · 24 live hours</div>
      </div>
      <button 
        onClick={openEnrolment}
        className="bg-[#3155F5] hover:bg-[#2A4AD0] text-white font-medium text-[12px] min-h-[43px] px-[13px] rounded-[6px] flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#3155F5] focus:ring-offset-1"
      >
        <span>View enrolment</span>
        <span className="ml-[13px] text-[16px] leading-none">↗</span>
      </button>
    </div>
  );
}
