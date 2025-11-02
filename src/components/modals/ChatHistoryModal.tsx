import React, { FC } from 'react';
import Modal from '../Modal';

const ChatHistoryModal: FC<{onClose: () => void}> = ({onClose}) => (
     <Modal title="Chat with Astrologer V. Kumar" onClose={onClose}>
        <div className="h-64 overflow-y-auto bg-cream p-2 rounded space-y-2">
            <div className="p-2 rounded-lg bg-neutral-200">Namaste! How may I help you today?</div>
            <div className="p-2 rounded-lg bg-blue-100 ml-auto text-right">I was wondering about my career.</div>
            <div className="p-2 rounded-lg bg-neutral-200">The stars indicate a period of change for you...</div>
        </div>
    </Modal>
);

export default ChatHistoryModal;
