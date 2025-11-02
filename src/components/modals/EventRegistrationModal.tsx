import React, { FC, useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';
import { ICONS } from '../../constants/icons';

const EventRegistrationModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { setActiveModal, modalContext: event } = useApp();
    const [tickets, setTickets] = useState({ regular: 1, vip: 0 });

    const totalTickets = tickets.regular + tickets.vip;
    const regularPrice = event.price;
    const vipPrice = event.price * 1.5;
    
    const subtotal = (tickets.regular * regularPrice) + (tickets.vip * vipPrice);
    const discount = totalTickets >= 3 ? subtotal * 0.2 : 0;
    const total = subtotal - discount;

    const handleCheckout = () => {
        onClose();
        setActiveModal('checkout', { item: `${totalTickets} ticket(s) for ${event.title}`, price: total });
    };
    
    return (
        <Modal title={`Register for ${event.title}`} onClose={onClose}>
           <div className="space-y-4">
               <div>
                   <h3 className="font-serif font-bold text-lg mb-2">Select Tickets</h3>
                   <div className="space-y-3">
                       {/* Regular Ticket */}
                       <div className="flex justify-between items-center p-3 bg-neutral-100 rounded-md">
                           <div>
                               <p className="font-semibold">Regular Ticket</p>
                               <p className="font-bold font-special text-saffron">₹{regularPrice}</p>
                           </div>
                            <div className="flex items-center gap-2">
                               <Button onClick={() => setTickets(t => ({...t, regular: Math.max(0, t.regular - 1)}))} variant="outline" className="px-3 py-1 text-lg">-</Button>
                               <Input type="number" value={tickets.regular} readOnly className="w-12 text-center" />
                               <Button onClick={() => setTickets(t => ({...t, regular: t.regular + 1}))} variant="outline" className="px-3 py-1 text-lg">+</Button>
                           </div>
                       </div>
                       {/* VIP Ticket */}
                       <div className="flex justify-between items-center p-3 bg-neutral-100 rounded-md">
                           <div>
                               <p className="font-semibold">VIP Ticket (Front Row & Prasad)</p>
                               <p className="font-bold font-special text-saffron">₹{vipPrice}</p>
                           </div>
                           <div className="flex items-center gap-2">
                               <Button onClick={() => setTickets(t => ({...t, vip: Math.max(0, t.vip - 1)}))} variant="outline" className="px-3 py-1 text-lg">-</Button>
                               <Input type="number" value={tickets.vip} readOnly className="w-12 text-center" />
                               <Button onClick={() => setTickets(t => ({...t, vip: t.vip + 1}))} variant="outline" className="px-3 py-1 text-lg">+</Button>
                           </div>
                       </div>
                   </div>
               </div>

                {totalTickets >= 3 && (
                    <div className="p-2 bg-green-100 text-green-800 rounded-md text-sm text-center font-semibold">
                       🎉 "Bring 3 friends, save 20%" discount applied!
                    </div>
                )}
                
                <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between"><p>Subtotal</p><p>₹{subtotal.toFixed(2)}</p></div>
                    {discount > 0 && <div className="flex justify-between text-green-600"><p>Group Discount</p><p>- ₹{discount.toFixed(2)}</p></div>}
                    <div className="flex justify-between font-bold text-lg"><p>Total</p><p>₹{total.toFixed(2)}</p></div>
                </div>

                <Button onClick={handleCheckout} className="w-full mt-4" disabled={totalTickets === 0}>
                    Proceed to Payment
                </Button>
           </div>
        </Modal>
    );
};

export default EventRegistrationModal;
