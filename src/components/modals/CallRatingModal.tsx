import React, { FC, useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Button from '../Button';

const CallRatingModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { showToast, modalContext: practitioner } = useApp();
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        onClose();
        showToast("Thank you for your feedback!");
    };

    return (
        <Modal title={`Rate your call with ${practitioner.name}`} onClose={onClose}>
            <div className="text-center space-y-4">
                <p>How was your experience?</p>
                <div className="flex justify-center text-4xl text-gray-300">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={() => setRating(star)}
                            className={`transition-colors ${rating >= star ? 'text-gold' : ''}`}
                        >
                            ★
                        </button>
                    ))}
                </div>
                <textarea placeholder="Any additional feedback? (optional)" className="w-full p-2 border mt-1 h-24 border-neutral-300 rounded-md bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"></textarea>
                <Button onClick={handleSubmit} className="w-full">Submit Feedback</Button>
            </div>
        </Modal>
    );
};

export default CallRatingModal;
