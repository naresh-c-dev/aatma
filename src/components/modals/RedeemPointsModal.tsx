import React, { FC } from 'react';
import Modal from '../Modal';
import Button from '../Button';

const RedeemPointsModal: FC<{onClose: () => void}> = ({onClose}) => (
    <Modal title="Redeem Points" onClose={onClose}>
        <p>Use 1000 points for 10% off your next course.</p>
        <Button onClick={onClose} className="w-full mt-4">Redeem Now</Button>
    </Modal>
);

export default RedeemPointsModal;
