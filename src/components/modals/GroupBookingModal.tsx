import React, { FC, useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

const GroupBookingModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { setActiveModal, showToast, modalContext: practitioner } = useApp();
    const [participants, setParticipants] = useState(2);

    const handleBooking = () => {
        onClose();
        showToast("Group Pooja booked! Invitation links sent.");
    }
    
    return (
        <Modal title={`Book Group Pooja with ${practitioner.name}`} onClose={onClose}>
           <div className="space-y-4">
               <div>
                   <label className="font-semibold">Number of Participants</label>
                   <div className="flex items-center gap-2 mt-1">
                       <Button onClick={() => setParticipants(p => Math.max(2, p - 1))} variant="outline" className="px-3 py-1 text-lg">-</Button>
                       <Input type="number" value={participants} readOnly className="text-center" />
                       <Button onClick={() => setParticipants(p => Math.min(10, p + 1))} variant="outline" className="px-3 py-1 text-lg">+</Button>
                   </div>
               </div>
                <div>
                    <label className="font-semibold">Select Date</label>
                    <Input type="date" />
                </div>
                 <div>
                    <label className="font-semibold">Select Time</label>
                    <Input type="time" />
                </div>
                <div className="p-2 bg-blue-100 text-blue-800 rounded-md text-sm text-center">
                    A Google Meet link will be generated and shared with all participants.
                </div>
                 <div className="flex items-center justify-between">
                    <label htmlFor="split-payment" className="font-semibold">Split Payment?</label>
                    <input id="split-payment" type="checkbox" className="w-5 h-5" />
                </div>
                <Button onClick={handleBooking} className="w-full mt-4">Confirm Group Booking</Button>
           </div>
        </Modal>
    );
};

export default GroupBookingModal;