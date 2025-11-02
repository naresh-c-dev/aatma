import React, { FC, useState } from 'react';
import { useApp } from '../context/AppContext';
import { LIVE_SESSIONS } from '../constants/data';
import Card from '../components/Card';
import Button from '../components/Button';
import { LiveSession } from '../types';

const LiveSessionCard: FC<{ session: LiveSession }> = ({ session }) => {
    const { setActiveModal } = useApp();
    return (
        <Card>
            <img src={session.imageUrl} alt={session.title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h3 className="font-serif text-lg font-bold">{session.title}</h3>
                    <span className="text-xs font-semibold bg-saffron/10 text-saffron px-2 py-1 rounded-full flex-shrink-0">{session.type}</span>
                </div>
                <p className="text-sm text-warmGray">with {session.instructor}</p>
                <p className="font-semibold mt-2">{session.time}</p>
                <div className="w-full bg-neutral-200 rounded-full h-2.5 my-2">
                    <div className="bg-saffron h-2.5 rounded-full" style={{width: `${(session.enrolled / session.capacity) * 100}%`}}></div>
                </div>
                <p className="text-xs text-warmGray">{session.enrolled} / {session.capacity} enrolled</p>
                <Button onClick={() => setActiveModal('group_session_detail', session)} className="w-full mt-4">View Details</Button>
            </div>
        </Card>
    )
};

const LiveSessionsPage: FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="font-display text-3xl font-bold">Live Group Sessions</h1>
            <p className="text-warmGray">Join live, interactive sessions with our expert instructors. Learn, practice, and grow with the community in real-time.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {LIVE_SESSIONS.map(session => (
                    <LiveSessionCard key={session.id} session={session} />
                ))}
            </div>
        </div>
    );
};

export default LiveSessionsPage;
