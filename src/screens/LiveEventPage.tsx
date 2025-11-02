import React, { FC, useState } from 'react';
import { ICONS } from '../constants/icons';
import Button from '../components/Button';
import Card from '../components/Card';

const LiveEventPage: FC = () => {
    const [chatMessages, setChatMessages] = useState([
        { user: 'Rohan V.', msg: 'Om Namah Shivaya 🙏' },
        { user: 'Priya K.', msg: 'So beautiful!' },
        { user: 'Ananya S.', msg: 'Har Har Mahadev!' },
    ]);

    return (
        <div className="w-full h-full bg-cream">
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Main Content */}
                <div className="flex-grow">
                    <div className="relative aspect-video bg-charcoal rounded-lg overflow-hidden">
                        <video src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" controls autoPlay loop className="w-full h-full object-cover"></video>
                        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-0.5 rounded text-sm font-bold animate-pulse">🔴 LIVE</div>
                        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-0.5 rounded text-sm">
                            1,234 watching
                        </div>
                    </div>
                    <div className="mt-4 p-4 bg-neutral-100 rounded-lg">
                        <h1 className="font-display text-2xl font-bold">Live Ganga Aarti from Varanasi</h1>
                        <p className="text-warmGray">Streaming live from Dashashwamedh Ghat.</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                             <Button className="flex items-center gap-2"><div className="w-5 h-5">{ICONS.Camera}</div> Altar View</Button>
                             <Button variant="outline" className="flex items-center gap-2"><div className="w-5 h-5">{ICONS.Camera}</div> Pandit View</Button>
                             <Button variant="outline" className="flex items-center gap-2"><div className="w-5 h-5">{ICONS.Camera}</div> Wide View</Button>
                        </div>
                    </div>
                </div>
                {/* Sidebar */}
                <div className="lg:w-96 flex-shrink-0">
                    <Card className="p-4 h-full flex flex-col">
                        <h2 className="font-serif font-bold text-xl mb-2">Live Chat</h2>
                        <div className="flex-grow h-64 lg:h-auto overflow-y-auto bg-cream p-2 rounded-md mb-2 space-y-2">
                            {chatMessages.map((chat, i) => (
                                <div key={i}><strong className="text-saffron">{chat.user}:</strong> {chat.msg}</div>
                            ))}
                        </div>
                        <div className="border-t pt-4">
                            <h2 className="font-serif font-bold text-xl mb-2 text-center">Send Prasad</h2>
                             <div className="grid grid-cols-3 gap-2 mb-2">
                                <Button variant="outline">₹51</Button>
                                <Button variant="outline">₹101</Button>
                                <Button variant="outline">₹251</Button>
                            </div>
                            <Button className="w-full flex items-center justify-center gap-2"><div className="w-5 h-5">{ICONS.Gift}</div> Donate Now</Button>
                        </div>
                    </Card>
                </div>
            </div>

             {/* Upcoming Poojas */}
            <div className="mt-8">
                <h2 className="font-display text-2xl font-bold mb-4">Upcoming Poojas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 text-center">
                        <h3 className="font-serif font-bold">Rudrabishek Pooja</h3>
                        <p className="text-warmGray">Tomorrow at 8:00 AM</p>
                        <p className="text-2xl font-bold text-saffron mt-2">20:45:10</p>
                    </Card>
                     <Card className="p-4 text-center">
                        <h3 className="font-serif font-bold">Ganesh Chaturthi Special</h3>
                        <p className="text-warmGray">In 3 Days</p>
                        <Button variant="outline" className="mt-4">Notify Me</Button>
                    </Card>
                     <Card className="p-4 text-center">
                        <h3 className="font-serif font-bold">Diwali Grand Pooja</h3>
                        <p className="text-warmGray">In 1 Month</p>
                        <Button variant="outline" className="mt-4">Notify Me</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default LiveEventPage;