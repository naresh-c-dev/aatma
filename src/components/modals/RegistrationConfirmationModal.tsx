import React, { FC } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Button from '../Button';
import { ICONS } from '../../constants/icons';

const RegistrationConfirmationModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { showToast, modalContext: event } = useApp();

    const handleAddToCalendar = () => {
        showToast("Event added to your calendar!");
    }

    return (
        <Modal title="Registration Confirmed!" onClose={onClose}>
            <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto text-green-500">
                    {/* FIX: Removed ineffective type cast which was causing an error. The underlying type issue is fixed in icons.tsx. */}
                    {React.cloneElement(ICONS.Certificate, { className: "w-full h-full" })}
                </div>
                <h3 className="font-serif font-bold text-xl">You're all set!</h3>
                <p className="text-warmGray">Thank you for registering for {event.title}. Your ticket and confirmation have been sent to your email.</p>
                
                <div className="p-4 bg-neutral-100 rounded-lg">
                     <h4 className="font-semibold">Your Ticket</h4>
                     <div className="w-32 h-32 mx-auto text-charcoal my-2">{ICONS.QrCode}</div>
                     <p className="text-xs text-warmGray">Present this QR code at the event entrance.</p>
                </div>

                <Button onClick={handleAddToCalendar} className="w-full flex items-center justify-center gap-2">
                    {ICONS.AddToCalendar} Add to Calendar
                </Button>
            </div>
        </Modal>
    );
};

export default RegistrationConfirmationModal;