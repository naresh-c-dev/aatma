import React, { FC } from 'react';
import { useApp } from '../context/AppContext';
import { DUMMY_USER, COURSES } from '../constants/data';
import { ICONS } from '../constants/icons';
import Button from '../components/Button';
import Card from '../components/Card';
import { Booking, Achievement } from '../types';

const ProfilePage: FC = () => {
    const { user, setActiveModal } = useApp();

    if (!user) {
        return (
            <div className="text-center py-16">
                <p>Please log in to view your profile.</p>
                <Button onClick={() => setActiveModal('login')} className="mt-4">Login</Button>
            </div>
        )
    }

    const DUMMY_BOOKINGS: Booking[] = [
        { id: 1, service: 'Vedic Astrology', practitioner: 'V. Kumar', date: '28 Oct 2024', status: 'Upcoming'},
        { id: 2, service: 'Griha Pravesh', practitioner: 'S. Tripathi', date: '15 Sep 2024', status: 'Past'},
    ];

    const DUMMY_ACHIEVEMENTS: Achievement[] = [
        { id: 1, name: 'First Course', icon: 'Courses' },
        { id: 2, name: 'Quiz Master', icon: 'Certificate' },
    ];

    return (
        <div className="space-y-8">
            <Card className="p-6 text-center">
                <img src="https://picsum.photos/seed/user1/100/100" alt="User Avatar" className="w-24 h-24 rounded-full mx-auto border-4 border-saffron" />
                <h1 className="font-display text-3xl font-bold mt-4">{DUMMY_USER.name}</h1>
                <p className="text-warmGray">{DUMMY_USER.email}</p>
                <div className="mt-4 p-3 bg-saffron/10 rounded-lg inline-block">
                    <span className="font-bold text-lg text-saffron">{DUMMY_USER.points} Points</span>
                    <Button onClick={() => setActiveModal('redeem')} variant="outline" className="ml-4 py-1 px-3 text-sm">Redeem</Button>
                </div>
            </Card>

            <div>
                <h2 className="font-display text-2xl font-bold mb-4">My Bookings</h2>
                <div className="space-y-4">
                {DUMMY_BOOKINGS.map(booking => (
                    <Card key={booking.id} className="p-4 flex justify-between items-center">
                        <div>
                            <p className="font-bold">{booking.service} with {booking.practitioner}</p>
                            <p className="text-sm text-warmGray">{booking.date}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${booking.status === 'Upcoming' ? 'bg-green-100 text-green-800' : 'bg-neutral-200'}`}>{booking.status}</span>
                    </Card>
                ))}
                </div>
            </div>

             <div>
                <h2 className="font-display text-2xl font-bold mb-4">My Courses</h2>
                <Card className="p-4">
                    <div className="flex items-center">
                        <img src={COURSES[0].imageUrl} alt={COURSES[0].title} className="w-16 h-16 rounded-md object-cover mr-4" />
                        <div>
                            <p className="font-bold">{COURSES[0].title}</p>
                            <div className="w-full bg-neutral-200 rounded-full h-2.5 mt-2">
                                <div className="bg-saffron h-2.5 rounded-full" style={{width: '75%'}}></div>
                            </div>
                             <p className="text-xs text-warmGray mt-1">75% Complete</p>
                        </div>
                    </div>
                </Card>
             </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-4">My Achievements</h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {DUMMY_ACHIEVEMENTS.map(ach => (
                        <Card key={ach.id} className="p-4 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center text-saffron text-3xl">
                                {ICONS[ach.icon] || ICONS.Star}
                            </div>
                            <p className="font-semibold mt-2 text-sm">{ach.name}</p>
                        </Card>
                     ))}
                 </div>
              </div>
        </div>
    )
};

export default ProfilePage;
