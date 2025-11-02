import React, { FC, useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Button from '../Button';

const AskLiveModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { showToast } = useApp();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            showToast("Your question has been submitted to the queue.");
        }, 2000);
    };

    if (submitted) {
         return (
             <Modal title="Question Submitted" onClose={onClose}>
                <div className="text-center p-4">
                    <h3 className="font-serif font-bold text-lg">Thank you!</h3>
                    <p className="text-warmGray mt-2">Your question is in the queue. The astrologer will answer it shortly.</p>
                </div>
            </Modal>
         )
    }

    return (
        <Modal title="Ask a Question Live" onClose={onClose}>
            <div className="space-y-4">
                <p>Submit your question to be answered live by Astrologer V. Kumar.</p>
                <textarea placeholder="Type your question here... e.g., 'When will I get a promotion? My DOB is...'" className="w-full p-2 border mt-1 h-24 border-neutral-300 rounded-md bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"></textarea>
                <Button onClick={handleSubmit} className="w-full">Submit Question (₹101)</Button>
            </div>
        </Modal>
    );
};

export default AskLiveModal;
