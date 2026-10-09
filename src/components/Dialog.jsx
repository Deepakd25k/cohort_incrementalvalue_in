import React, { useEffect, useRef } from 'react';

export default function Dialog({ isOpen, onClose, title, body }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap could be added here for full accessibility
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-main/20 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div className="bg-background rounded-xl shadow-lg w-full max-w-sm p-6 border border-border">
        <h3 id="dialog-title" className="text-lg font-semibold text-main mb-2">{title}</h3>
        <p className="text-secondary text-[15px] mb-6 leading-relaxed">{body}</p>
        <div className="flex justify-end">
          <button 
            ref={dialogRef}
            onClick={onClose}
            className="h-10 px-4 bg-accent text-white font-semibold rounded-md text-sm hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
