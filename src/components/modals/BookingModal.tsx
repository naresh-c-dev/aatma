import React, { FC, useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { PractitionerService } from '../../types';

const BookingModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { setActiveModal, modalContext: practitioner } = useApp();
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState<PractitionerService | null>(practitioner.services[0]);
    const [duration, setDuration] = useState(60); // in minutes
    const [travelCost, setTravelCost] = useState(500);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const price = useMemo(() => {
        if (!selectedService) return travelCost;
        return selectedService.price + travelCost;
    }, [selectedService, travelCost]);

    const handleBooking = () => {
        onClose();
        setActiveModal('checkout', { item: `${selectedService?.name} at Home`, price: price});
    }

    const renderCalendar = () => {
        const days = Array.from({ length: 30 }, (_, i) => i + 1);
        const today = new Date().getDate();
        return (
            <div className="grid grid-cols-7 gap-1 text-center">
                {days.map(day => {
                    const isAvailable = Math.random() > 0.3; // Random availability
                    const isPast = day < today;
                    return (
                        <button 
                            key={day}
                            disabled={isPast || !isAvailable}
                            onClick={() => setSelectedDate(day)}
                            className={`p-2 rounded-full aspect-square ${
                                isPast ? 'text-neutral-400' :
                                !isAvailable ? 'bg-red-100 text-red-400 line-through' :
                                selectedDate === day ? 'bg-saffron text-white' :
                                'bg-green-100 text-green-800 hover:bg-green-200'
                            }`}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>
        );
    };
    
    const renderTimeSlots = () => {
        const slots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];
        return (
             <div className="grid grid-cols-3 gap-2">
                {slots.map(slot => {
                    const isAvailable = Math.random() > 0.4;
                    return (
                        <button 
                            key={slot}
                            disabled={!isAvailable}
                            onClick={() => setSelectedTime(slot)}
                            className={`p-2 rounded ${
                                !isAvailable ? 'bg-neutral-200 text-neutral-500' :
                                selectedTime === slot ? 'bg-saffron text-white' :
                                'border border-saffron text-saffron hover:bg-saffron/10'
                            }`}
                        >
                            {slot}
                        </button>
                    )
                })}
             </div>
        )
    }

    return (
        <Modal title={`Book 1:1 Session with ${practitioner.name}`} onClose={onClose}>
            {step === 1 && (
                <div className="space-y-4">
                    <div>
                        <label className="font-semibold">Select Service</label>
                        <Select onChange={(e) => setSelectedService(practitioner.services.find((s: PractitionerService) => s.name === e.target.value) || null)}>
                            {practitioner.services.map((s: PractitionerService) => <option key={s.name}>{s.name}</option>)}
                        </Select>
                    </div>
                     <div>
                        <label className="font-semibold">Session Duration (mins)</label>
                        <input type="range" min="30" max="180" step="15" value={duration} onChange={e => setDuration(parseInt(e.target.value))} className="w-full"/>
                        <p className="text-center font-bold">{duration} minutes</p>
                    </div>
                    <div>
                        <label className="font-semibold">Your Location</label>
                        <Input placeholder="Enter your address for offline puja" />
                        <p className="text-xs text-warmGray text-right mt-1">Travel Cost: ₹{travelCost}</p>
                    </div>
                     <div className="text-right font-bold font-special text-xl">Total: ₹{price}</div>
                    <Button onClick={() => setStep(2)} className="w-full mt-4" disabled={!selectedService}>Select Date & Time</Button>
                </div>
            )}
            {step === 2 && (
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-lg text-center mb-2">Select Date</h3>
                        {renderCalendar()}
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg text-center my-2">Select Time</h3>
                        {renderTimeSlots()}
                    </div>
                    <Button onClick={() => setStep(3)} className="w-full mt-4" disabled={!selectedDate || !selectedTime}>Add Details</Button>
                </div>
            )}
            {step === 3 && (
                <div className="space-y-4">
                     <div>
                        <h3 className="font-semibold">Special Requests</h3>
                        <textarea placeholder="Any specific requirements or instructions?" className="w-full p-2 border mt-1 h-24 border-neutral-300 rounded-md bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"></textarea>
                    </div>
                    <div className="p-4 bg-saffron/10 rounded-lg">
                        <h4 className="font-bold">Booking Summary</h4>
                        <p><strong>Service:</strong> {selectedService?.name}</p>
                        <p><strong>Date:</strong> {selectedDate} October 2024, {selectedTime}</p>
                        <p className="font-bold font-special text-lg mt-2">Total: ₹{price}</p>
                    </div>
                    <Button onClick={handleBooking} className="w-full mt-4">Proceed to Checkout</Button>
                </div>
            )}
        </Modal>
    );
}

export default BookingModal;