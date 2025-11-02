import React, { FC } from 'react';
import { Event } from '../types';
import { useApp } from '../context/AppContext';
import Card from './Card';
import Button from './Button';

const EventCard: FC<{ event: Event }> = ({ event }) => {
    const { setPage } = useApp();
    return (
        <Card>
            <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h3 className="font-serif text-xl font-bold">{event.title}</h3>
                <p className="text-warmGray">{event.location}</p>
                <p className="font-semibold mt-1">{event.date}</p>
                <Button onClick={() => setPage('event_detail', event)} className="w-full mt-4">View Details</Button>
            </div>
        </Card>
    );
};

export default EventCard;
