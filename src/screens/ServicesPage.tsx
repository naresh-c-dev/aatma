import React, { FC, useState } from 'react';
import { useApp } from '../context/AppContext';
import { PANDITS, ASTROLOGERS } from '../constants/data';
import PractitionerCard from '../components/PractitionerCard';
import Card from '../components/Card';
import Button from '../components/Button';

const ServicesPage: FC = () => {
    const { pageContext, setActiveModal } = useApp();
    const [activeTab, setActiveTab] = useState(pageContext?.initialTab || 'pooja');
    return (
        <div className="space-y-6">
            <h1 className="font-display text-3xl font-bold">Practitioner Services</h1>
            <div className="border-b border-neutral-300 flex space-x-4">
                <button onClick={() => setActiveTab('pooja')} className={`py-2 px-4 font-semibold ${activeTab === 'pooja' ? 'border-b-2 border-saffron text-saffron' : 'text-warmGray'}`}>E-Pooja</button>
                <button onClick={() => setActiveTab('astrology')} className={`py-2 px-4 font-semibold ${activeTab === 'astrology' ? 'border-b-2 border-saffron text-saffron' : 'text-warmGray'}`}>Astrology</button>
            </div>

            {activeTab === 'pooja' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PANDITS.map(p => <PractitionerCard key={p.id} practitioner={p} />)}
                </div>
            )}
            {activeTab === 'astrology' && (
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ASTROLOGERS.map(a => <PractitionerCard key={a.id} practitioner={a} />)}
                    </div>
                    <h2 className="font-display text-2xl font-bold mt-12 mb-4">Live Astrology Sessions</h2>
                     <Card className="p-4 flex items-center justify-between">
                        <div>
                            <h3 className="font-serif font-bold">Weekly Horoscope with V. Kumar</h3>
                            <p className="text-sm text-warmGray">8 PM Tonight - Live Q&A</p>
                        </div>
                        <Button onClick={() => setActiveModal('ask_live')}>Join Live</Button>
                    </Card>
                </div>
            )}
        </div>
    )
};

export default ServicesPage;
