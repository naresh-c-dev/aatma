import React, { FC, useState } from 'react';
import { EVENTS } from '../constants/data';
import EventCard from '../components/EventCard';
import Input from '../components/Input';
import Select from '../components/Select';
import { ICONS } from '../constants/icons';
import Button from '../components/Button';

const EventsPage: FC = () => {
    const [view, setView] = useState('list'); // list, map, calendar
    
    const renderCalendarView = () => (
        <div className="bg-neutral-100 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
                <Button variant="outline" className="py-1 px-3 text-sm">&lt;</Button>
                <h3 className="font-bold text-lg">November 2024</h3>
                <Button variant="outline" className="py-1 px-3 text-sm">&gt;</Button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-warmGray">
                <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
            </div>
            <div className="grid grid-cols-7 gap-1 mt-2">
                {Array.from({ length: 30 }, (_, i) => i + 1).map(day => (
                    <div key={day} className={`p-1 h-20 border border-neutral-200 rounded ${day === 15 ? 'bg-saffron/10' : ''}`}>
                        <span className="font-bold">{day}</span>
                        {day === 15 && <div className="mt-1 text-xs bg-saffron text-white rounded p-1 truncate">Yoga Retreat</div>}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            <h1 className="font-display text-3xl font-bold">Events & Workshops</h1>
            
            {/* Search and Filters */}
            <div className="space-y-4">
                <div className="flex gap-2">
                    <div className="relative flex-grow">
                        <Input type="search" placeholder="Search 'Yoga workshops near Mumbai this weekend'..." className="pl-10" />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-warmGray">{ICONS.Search}</div>
                    </div>
                    {/* FIX: Removed ineffective type cast which was causing an error. The underlying type issue is fixed in icons.tsx. */}
                    <Button variant="outline" className="p-2 aspect-square">{React.cloneElement(ICONS.Search, {d: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m12 0v-1.5a6 6 0 00-12 0v1.5"})}</Button>
                </div>
                 <div className="flex gap-2 flex-wrap text-sm">
                    <span className="font-semibold">Trending:</span>
                    <button className="bg-neutral-200 px-2 py-0.5 rounded-full hover:bg-neutral-300">Retreats</button>
                    <button className="bg-neutral-200 px-2 py-0.5 rounded-full hover:bg-neutral-300">Online Yoga</button>
                    <button className="bg-neutral-200 px-2 py-0.5 rounded-full hover:bg-neutral-300">Varanasi</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Select><option>Category: All</option><option>Workshop</option><option>Retreat</option><option>Festival</option><option>Online Session</option></Select>
                    <Input type="date" />
                    <Select><option>Price: All</option><option>Free</option><option>Under ₹1000</option><option>₹1000 - ₹5000</option></Select>
                    <Select><option>Language: All</option><option>English</option><option>Hindi</option></Select>
                </div>
            </div>

            {/* View Toggles and Sort */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 p-1 bg-neutral-200 rounded-lg">
                    <button onClick={() => setView('list')} className={`p-1 rounded-md ${view === 'list' ? 'bg-white shadow' : ''}`}>{ICONS.List}</button>
                    <button onClick={() => setView('map')} className={`p-1 rounded-md ${view === 'map' ? 'bg-white shadow' : ''}`}>{ICONS.Map}</button>
                    <button onClick={() => setView('calendar')} className={`p-1 rounded-md ${view === 'calendar' ? 'bg-white shadow' : ''}`}>{ICONS.Calendar}</button>
                </div>
                <Select className="w-48">
                    <option>Sort by: Date</option>
                    <option>Popularity</option>
                    <option>Price</option>
                </Select>
            </div>

            {/* Content */}
            {view === 'list' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {EVENTS.map(event => <EventCard key={event.id} event={event}/>)}
                </div>
            )}
            {view === 'map' && (
                <div className="w-full h-96 bg-neutral-200 rounded-lg flex items-center justify-center text-warmGray">
                    <img src="https://storage.googleapis.com/maker-studio-project-files-prod/userID-YmJ32gK4YtXy682gso221oq2F2A2/projectId-t2wln/Screenshot%202024-05-23%20at%2011.00.41%E2%80%AFPM.png" alt="Map placeholder" className="w-full h-full object-cover rounded-lg"/>
                </div>
            )}
            {view === 'calendar' && renderCalendarView()}

        </div>
    );
}

export default EventsPage;