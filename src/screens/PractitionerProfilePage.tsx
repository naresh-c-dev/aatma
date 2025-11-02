import React, { FC, useState } from 'react';
import { useApp } from '../context/AppContext';
import Button from '../components/Button';
import Card from '../components/Card';
import { ICONS } from '../constants/icons';
import { Review, PractitionerService } from '../types';

const PractitionerProfilePage: FC = () => {
    const { pageContext: practitioner, setActiveModal } = useApp();
    const [activeTab, setActiveTab] = useState('services');

    if (!practitioner) return <div>Practitioner not found.</div>;

    const renderStars = (rating: number) => {
        return Array(5).fill(0).map((_, i) => (
            <span key={i} className={i < Math.round(rating) ? 'text-gold' : 'text-neutral-300'}>
                {ICONS.Star}
            </span>
        ));
    };

    return (
        <div className="space-y-6">
            <Card className="p-6">
                <div className="md:flex gap-6 items-start">
                    <div className="text-center flex-shrink-0">
                        <img src={practitioner.imageUrl} alt={practitioner.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-saffron" />
                        <div className="flex items-center justify-center space-x-2 mt-2">
                            {renderStars(practitioner.rating)}
                            <span className="font-bold">{practitioner.rating}</span>
                        </div>
                         <span className="text-warmGray text-sm">({practitioner.reviews.length} reviews)</span>
                    </div>
                    <div className="text-center md:text-left mt-4 md:mt-0 flex-grow">
                        <h1 className="font-display text-3xl font-bold">{practitioner.name}</h1>
                        <p className="text-xl font-semibold text-saffron">{practitioner.specialty}</p>
                        {practitioner.location && <p className="text-warmGray">{practitioner.location}</p>}
                        
                        {/* New Instant Consultation Section */}
                        <div className="mt-4 p-4 bg-saffron/5 rounded-lg border border-saffron/20">
                            <h3 className="font-serif font-bold text-lg">Instant Consultation</h3>
                            <p className="text-sm text-warmGray mb-3">Connect with {practitioner.name} right now for immediate guidance.</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button onClick={() => setActiveModal('chat', practitioner)} className="w-full">Chat Now (₹25/min)</Button>
                                <Button onClick={() => setActiveModal('video_call', practitioner)} className="w-full">Video Call (₹40/min)</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <div className="border-b border-neutral-300 flex space-x-4">
                <button onClick={() => setActiveTab('services')} className={`py-2 px-4 font-semibold ${activeTab === 'services' ? 'border-b-2 border-saffron text-saffron' : 'text-warmGray'}`}>Book a Service</button>
                <button onClick={() => setActiveTab('about')} className={`py-2 px-4 font-semibold ${activeTab === 'about' ? 'border-b-2 border-saffron text-saffron' : 'text-warmGray'}`}>About</button>
                <button onClick={() => setActiveTab('reviews')} className={`py-2 px-4 font-semibold ${activeTab === 'reviews' ? 'border-b-2 border-saffron text-saffron' : 'text-warmGray'}`}>Reviews</button>
            </div>

            {activeTab === 'services' && (
                <div>
                    <h2 className="font-display text-2xl font-bold mb-4">Schedule a Future Session</h2>
                    <p className="text-warmGray mb-4">Book a detailed session for a future date and time that works for you.</p>
                    <div className="space-y-4">
                        {practitioner.services.map((service: PractitionerService) => (
                             <Card key={service.name} className="p-4 flex flex-col md:flex-row justify-between items-center">
                                <div>
                                    <h3 className="font-serif font-bold text-lg">{service.name}</h3>
                                    <p className="font-special font-bold text-saffron">₹{service.price}</p>
                                </div>
                                <div className="flex gap-2 mt-2 md:mt-0">
                                    <Button onClick={() => setActiveModal('booking', practitioner)}>Book Now</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'about' && (
                <Card className="p-6">
                    <h2 className="font-display text-2xl font-bold mb-2">About {practitioner.name}</h2>
                    <p className="text-warmGray whitespace-pre-line">{practitioner.bio}</p>
                </Card>
            )}

            {activeTab === 'reviews' && (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-display text-2xl font-bold">Client Reviews</h2>
                        <Button onClick={() => setActiveModal('review', practitioner)} variant="outline">Write a Review</Button>
                    </div>
                    <div className="space-y-4">
                        {practitioner.reviews.map((review: Review, index: number) => (
                             <Card key={index} className="p-4">
                                <div className="flex items-start">
                                    <img src={review.authorAvatar || `https://picsum.photos/seed/${review.author}/40/40`} alt={review.author} className="w-10 h-10 rounded-full mr-4" />
                                    <div>
                                        <p className="font-bold">{review.author}</p>
                                        <div className="flex">{renderStars(review.rating)}</div>
                                        <p className="text-warmGray mt-2">{review.comment}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                         {practitioner.reviews.length === 0 && (
                            <p className="text-center text-warmGray">No reviews yet. Be the first to write one!</p>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default PractitionerProfilePage;