import React, { FC, useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';
import { ICONS } from '../../constants/icons';

const CheckoutModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { showToast, modalContext } = useApp();
    const [paymentMethod, setPaymentMethod] = useState('card');
    const handlePayment = () => {
        onClose();
        showToast("Booking Confirmed!");
    };
    return (
        <Modal title="Checkout" onClose={onClose}>
            <div className="bg-cream p-4 rounded-lg border border-neutral-300 mb-4">
                <h3 className="font-bold">Order Summary</h3>
                <p>Item: {modalContext.item}</p>
                <p>Price: ₹{modalContext.price}</p>
                 <div className="flex gap-2 mt-2">
                    <Input placeholder="Discount Code" className="flex-grow"/>
                    <Button variant="outline" className="text-sm px-3 py-1">Apply</Button>
                </div>
            </div>
            
            <div className="mb-4">
                <h3 className="font-semibold mb-2">Select Payment Method</h3>
                <div className="flex justify-around p-2 bg-neutral-200 rounded-lg">
                    <button onClick={() => setPaymentMethod('card')} className={`p-2 rounded-md ${paymentMethod === 'card' ? 'bg-white shadow' : ''}`}>Card</button>
                    <button onClick={() => setPaymentMethod('upi')} className={`p-2 rounded-md ${paymentMethod === 'upi' ? 'bg-white shadow' : ''}`}>UPI</button>
                    <button onClick={() => setPaymentMethod('wallet')} className={`p-2 rounded-md ${paymentMethod === 'wallet' ? 'bg-white shadow' : ''}`}>Wallets</button>
                </div>
            </div>

            <div className="space-y-3">
                {paymentMethod === 'card' && <Input placeholder="Card Number" />}
                {paymentMethod === 'upi' && <Input placeholder="UPI ID" />}
                {paymentMethod === 'wallet' && <p className="text-center text-warmGray">Select wallet on next step</p>}
                
                <div className="flex justify-center items-center gap-4 py-2">
                    {ICONS.Visa}
                    {ICONS.Mastercard}
                    {ICONS.GPay}
                    {ICONS.Paytm}
                </div>
                
                <Button onClick={handlePayment} className="w-full">Pay Securely</Button>
                <Button variant="secondary" className="w-full bg-blue-600 hover:bg-blue-700">Pay with Razorpay</Button>
            </div>
            <p className="text-xs text-center text-warmGray mt-4">🔒 Your payment information is secure.</p>
        </Modal>
    )
}

export default CheckoutModal;