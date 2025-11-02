import React, { FC } from 'react';
import { useApp } from '../context/AppContext';
import { ICONS } from '../constants/icons';
import { Page } from '../types';

const BottomNav: FC = () => {
    const { setPage, user, isPlayerVisible } = useApp();
    const navItems = [
        { label: 'Home', icon: ICONS.Home, page: 'home' as Page },
        { label: 'Courses', icon: ICONS.Courses, page: 'courses' as Page },
        { label: 'Services', icon: ICONS.Services, page: 'services' as Page },
        { label: 'Community', icon: ICONS.Community, page: 'community' as Page },
        { label: 'Profile', icon: ICONS.User, page: 'profile' as Page, requiresAuth: true },
    ];

    return (
        <footer className={`fixed bottom-0 left-0 right-0 bg-cream thumb-friendly-nav z-40 md:hidden transition-transform duration-300 ${isPlayerVisible ? 'pb-16' : ''}`}>
            <div className="flex justify-around items-center h-16">
                {navItems.map(item => {
                    if (item.requiresAuth && !user) return null;
                    return (
                        <button key={item.page} onClick={() => setPage(item.page)} className="flex flex-col items-center justify-center text-charcoal hover:text-saffron transition-colors w-full h-full">
                            {item.icon}
                            <span className="text-xs mt-1">{item.label}</span>
                        </button>
                    )
                })}
            </div>
        </footer>
    );
};

export default BottomNav;
