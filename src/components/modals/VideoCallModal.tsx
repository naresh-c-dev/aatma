import React, { FC } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Button from '../Button';
import { ICONS } from '../../constants/icons';

const VideoCallModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { setActiveModal, modalContext: practitioner } = useApp();

    const handleEndCall = () => {
        onClose();
        setActiveModal('call_rating', practitioner);
    };

    return (
        <Modal title={`Video Call with ${practitioner.name}`} onClose={onClose}>
           <div className="space-y-4 text-center">
                <div className="relative w-full aspect-video bg-charcoal rounded-lg flex items-center justify-center text-white">
                    <p>Video Feed Placeholder</p>
                    <div className="absolute bottom-2 left-2">
                        <img src="https://picsum.photos/seed/user1/100/100" className="w-24 h-24 object-cover rounded-md border-2 border-white" alt="My camera" />
                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <Button variant="secondary" className="w-16 h-16 rounded-full flex items-center justify-center">{ICONS.Camera}</Button>
                    <Button onClick={handleEndCall} className="w-16 h-16 rounded-full flex items-center justify-center bg-red-600 hover:bg-red-700">End</Button>
                </div>
           </div>
        </Modal>
    );
};

export default VideoCallModal;
