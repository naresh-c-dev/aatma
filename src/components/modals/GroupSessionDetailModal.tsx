import React, { FC } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Button from '../Button';

const GroupSessionDetailModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { modalContext: session, setActiveModal } = useApp();

    const handleJoin = () => {
        onClose();
        setActiveModal('checkout', { item: session.title, price: '499' });
    };

    if (!session) return null;

    return (
        <Modal title={session.title} onClose={onClose}>
            <img src={session.imageUrl} alt={session.title} className="w-full h-48 object-cover rounded-lg mb-4"/>
            <p className="font-semibold">With {session.instructor}</p>
            <p className="text-warmGray">{session.time}</p>
            <p className="mt-4">Join this live, interactive group session to deepen your practice. You'll have the opportunity to ask questions and connect with fellow participants.</p>
            <div className="my-4 p-2 bg-saffron/10 rounded-lg text-center">
                <p className="font-bold">{session.enrolled} / {session.capacity} Spots Filled</p>
                <p className="text-sm">Only {session.capacity - session.enrolled} spots left!</p>
            </div>
            <Button onClick={handleJoin} className="w-full">Join Session (₹499)</Button>
        </Modal>
    );
};

export default GroupSessionDetailModal;
