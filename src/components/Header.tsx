import React, { useState, FC } from 'react';
import { useApp } from '../context/AppContext';
import { ICONS } from '../constants/icons';
import { Page } from '../types';
import Button from './Button';

const Header: FC = () => {
    const { setPage, setActiveModal, user, setUser } = useApp();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navItems = [
        { label: 'Courses', page: 'courses' as Page },
        { label: 'Live Sessions', page: 'live_sessions' as Page },
        { label: 'Astrology', page: 'services' as Page, context: { initialTab: 'astrology' } },
        { label: 'E-Pooja', page: 'services' as Page, context: { initialTab: 'pooja' } },
        { label: 'Music', page: 'music_page' as Page },
        { label: 'Community', page: 'community' as Page },
        { label: 'Events', page: 'events' as Page },
    ];
    return (
        <header className="sticky top-0 left-0 right-0 bg-cream/80 backdrop-blur-md shadow-sm z-40">
            <div className="container mx-auto px-4 h-16 flex justify-between items-center">
                <button onClick={() => setPage('home')} className="text-charcoal hover:text-saffron transition-colors">
                    Aatma
                </button>
                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map(item => (
                        <button key={item.label} onClick={() => setPage(item.page, item.context)} className="font-semibold hover:text-saffron transition-colors">
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <button className="text-charcoal hover:text-saffron transition-colors">{ICONS.Search}</button>
                    <button className="text-charcoal hover:text-saffron transition-colors">{ICONS.Notifications}</button>
                    <button className="text-charcoal hover:text-saffron transition-colors">{ICONS.Cart}</button>
                    {user ? (
                        <div className="relative">
                            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-charcoal hover:text-saffron transition-colors">
                                <img src="https://picsum.photos/seed/user1/40/40" alt="User Avatar" className="w-8 h-8 rounded-full" />
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-neutral-100 rounded-md shadow-lg py-1 z-50">
                                    <button onClick={() => { setPage('profile'); setDropdownOpen(false); }} className="block px-4 py-2 text-sm text-charcoal hover:bg-neutral-200 w-full text-left">My Profile</button>
                                    <button onClick={() => { setUser(null); setDropdownOpen(false); }} className="block px-4 py-2 text-sm text-charcoal hover:bg-neutral-200 w-full text-left">Logout</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Button onClick={() => setActiveModal('login')} variant="outline" className="py-1 px-4 text-sm">Login</Button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
