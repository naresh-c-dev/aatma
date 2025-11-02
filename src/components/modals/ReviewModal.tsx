import React, { FC, useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Button from '../Button';
import { ICONS } from '../../constants/icons';

const ReviewModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { showToast, modalContext: practitioner } = useApp();
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            showToast("Thank you for your review!");
        }, 3000);
    };

    if (submitted) {
        return (
            <Modal title="Review Submitted" onClose={onClose}>
                <div className="text-center p-4">
                    <h3 className="font-serif font-bold text-lg">Thank you!</h3>
                    <p className="text-warmGray mt-2">Your review has been submitted and is now pending approval. This helps us maintain a safe and authentic community.</p>
                </div>
            </Modal>
        )
    }

    return (
        <Modal title={`Review ${practitioner.name}`} onClose={onClose}>
            <div className="space-y-4">
                <div>
                    <label className="font-semibold">Your Rating</label>
                    <div className="flex justify-center text-4xl text-gray-300 my-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setRating(star)}
                                className={`transition-colors ${(hoverRating || rating) >= star ? 'text-gold' : ''}`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="font-semibold">Your Review</label>
                    <textarea placeholder="Share your experience..." className="w-full p-2 border mt-1 h-24 border-neutral-300 rounded-md bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"></textarea>
                </div>
                <div>
                     <label className="font-semibold">Add a photo (optional)</label>
                     <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <div className="w-12 h-12 mx-auto text-warmGray">{ICONS.Upload}</div>
                            <p className="text-sm text-warmGray">Click to upload or drag and drop</p>
                        </div>
                    </div>
                </div>
                <Button onClick={handleSubmit} className="w-full mt-4">Submit Review</Button>
            </div>
        </Modal>
    );
};

export default ReviewModal;