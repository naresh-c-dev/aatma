import React, { FC } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import Card from '../components/Card';
import { ICONS } from '../constants/icons';

const EventDetailPage: FC = () => {
    const { pageContext: event, setActiveModal } = useApp();
    if (!event) return <div>Event not found.</div>;
    return (
        <div className="space-y-8">
            <div>
                <img src={event.imageUrl} alt={event.title} className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg" />
                <h1 className="font-display text-4xl font-bold mt-4">{event.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-lg text-warmGray mt-2">
                    <span>{ICONS.Calendar} {event.date}</span>
                    <span>📍 {event.location}</span>
                    <span>🌐 {event.language}</span>
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <h2 className="font-display text-2xl font-bold mb-2">About this Event</h2>
                        <p>Join us for a transformative experience designed to rejuvenate your mind, body, and spirit in the serene foothills of the Himalayas. This retreat offers a unique opportunity to disconnect from the hustle and bustle of daily life and reconnect with your inner self through guided yoga, meditation, and spiritual workshops.</p>
                    </div>

                    {event.agenda.length > 0 && (
                        <div>
                            <h2 className="font-display text-2xl font-bold mb-2">Agenda</h2>
                            <div className="space-y-2">
                                {event.agenda.map((item: {time: string, topic: string}) => (
                                    <div key={item.time} className="flex items-center p-3 bg-neutral-100 rounded-md">
                                        <p className="w-24 font-semibold text-saffron">{item.time}</p>
                                        <p>{item.topic}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {event.speakers.length > 0 && (
                        <div>
                            <h2 className="font-display text-2xl font-bold mb-2">Speakers</h2>
                            {event.speakers.map((speaker: {name: string, title: string, imageUrl: string}) => (
                                <Card key={speaker.name} className="p-4 flex items-center gap-4">
                                    <img src={speaker.imageUrl} alt={speaker.name} className="w-20 h-20 rounded-full object-cover" />
                                    <div>
                                        <h3 className="font-serif font-bold text-lg">{speaker.name}</h3>
                                        <p className="text-saffron">{speaker.title}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
                <div className="lg:col-span-1">
                    <Card className="p-6 sticky top-20">
                        <h3 className="font-display text-2xl font-bold">Register Now</h3>
                        <p className="font-special text-3xl font-bold text-saffron my-2">₹{event.price}</p>
                        <Button onClick={() => setActiveModal('event_registration', event)} className="w-full mt-4">Book Your Spot</Button>
                        <div className="mt-4 text-sm text-warmGray space-y-2">
                            <h4 className="font-bold">Refund Policy</h4>
                            <p>Full refund available up to 30 days before the event. 50% refund up to 15 days before.</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default EventDetailPage;
