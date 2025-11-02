import React, { FC } from 'react';
import { useApp } from '../context/AppContext';
import { COURSES, ASTROLOGERS, EVENTS } from '../constants/data';
import { ICONS } from '../constants/icons';
import Button from '../components/Button';
import Section from '../components/Section';
import CourseCard from '../components/CourseCard';
import PractitionerCard from '../components/PractitionerCard';
import Card from '../components/Card';

const HomePage: FC = () => {
    const { setPage } = useApp();

    const features = [
        { icon: ICONS.Courses, title: "Learn & Grow", description: "Explore ancient wisdom through modern, interactive courses." },
        { icon: ICONS.Services, title: "Expert Guidance", description: "Connect with authentic Pandits and Astrologers for personalized advice." },
        { icon: ICONS.Music, title: "Heal & Relax", description: "Listen to curated playlists of chants and music for meditation." },
        { icon: ICONS.Community, title: "Join Community", description: "Share your spiritual journey with like-minded people." },
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="text-center py-10 md:py-20">
                <h1 className="font-display text-4xl md:text-6xl font-bold">Find Your Inner Peace.</h1>
                <p className="text-lg md:text-xl mt-4 text-warmGray max-w-2xl mx-auto">Your journey to spiritual wellness begins here. Explore courses, connect with experts, and join a conscious community.</p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={() => setPage('courses')}>Explore Courses</Button>
                    <Button onClick={() => setPage('services')} variant="outline">Book a Service</Button>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 bg-saffron/5 rounded-lg">
                <h2 className="text-3xl font-display font-bold text-center">A Complete Spiritual Journey</h2>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-4">
                    {features.map(feature => (
                        <div key={feature.title} className="text-center p-4">
                            <div className="flex justify-center items-center text-saffron h-16 w-16 mx-auto bg-saffron/10 rounded-full">
                                {/* FIX: With ICONS explicitly typed, the type cast here is no longer necessary and has been removed. */}
                                {React.isValidElement(feature.icon) && React.cloneElement(feature.icon, { className: 'h-8 w-8' })}
                            </div>
                            <h3 className="font-serif font-bold mt-4 text-lg">{feature.title}</h3>
                            <p className="text-warmGray text-sm mt-1">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Courses Section */}
            <Section title="Discover Timeless Wisdom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {COURSES.slice(0, 3).map((course) => <CourseCard key={course.id} course={course} />)}
                </div>
                <div className="text-center mt-8">
                    <Button onClick={() => setPage('courses')} variant="outline">Explore All Courses</Button>
                </div>
            </Section>

            {/* Featured Practitioners Section */}
            <Section title="Guidance from Trusted Experts">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ASTROLOGERS.slice(0, 4).map((practitioner) => <PractitionerCard key={practitioner.id} practitioner={practitioner} />)}
                </div>
                 <div className="text-center mt-8">
                    <Button onClick={() => setPage('services', { initialTab: 'astrology' })} variant="outline">Meet All Practitioners</Button>
                </div>
            </Section>

            {/* Live Events Section */}
            <Section title="Join Our Community Events">
                <Card className="md:flex items-center gap-6 p-4">
                    <img src={EVENTS[0].imageUrl} alt={EVENTS[0].title} className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-md"/>
                    <div className="flex-grow mt-4 md:mt-0">
                        <p className="font-semibold text-saffron">UPCOMING RETREAT</p>
                        <h3 className="font-display text-3xl font-bold">{EVENTS[0].title}</h3>
                        <p className="text-warmGray mt-1">{EVENTS[0].location} &bull; {EVENTS[0].date}</p>
                        <p className="mt-2">Immerse yourself in a transformative experience designed to rejuvenate your mind, body, and spirit in the serene foothills of the Himalayas.</p>
                        <Button onClick={() => setPage('event_detail', EVENTS[0])} className="mt-4">Learn More</Button>
                    </div>
                </Card>
            </Section>
        </div>
    );
};

export default HomePage;
