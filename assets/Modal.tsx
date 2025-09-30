import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .modal-backdrop {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .modal-content {
          animation: fadeInScale 0.2s ease-out forwards;
        }
      `}</style>
      <div 
        className="fixed inset-0 bg-punk-base/80 backdrop-blur-sm flex items-center justify-center z-50 modal-backdrop"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <div 
          className="bg-punk-panel border border-punk-sub/20 rounded-lg shadow-neon-magenta w-full max-w-md p-6 m-4 modal-content"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-punk-cyan">{title}</h2>
            <button onClick={onClose} className="text-punk-sub text-2xl leading-none hover:text-punk-text">&times;</button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
