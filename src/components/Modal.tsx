import React, { FC, PropsWithChildren } from 'react';
import { ICONS } from '../constants/icons';

interface ModalProps {
  title: string;
  onClose: () => void;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, title, onClose }) => (
    <div className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-cream rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-neutral-300">
                <h2 className="font-display text-xl font-bold">{title}</h2>
                <button onClick={onClose} className="text-charcoal hover:text-saffron">{ICONS.Close}</button>
            </div>
            <div className="p-6">
                {children}
            </div>
        </div>
    </div>
);

export default Modal;
