import React, { FC } from 'react';
import { ICONS } from '../constants/icons';

const LoadingScreen: FC = () => (
    <div className="fixed inset-0 bg-cream flex items-center justify-center z-[100]">
        <div className="animate-spin-slow">{ICONS.Ohm}</div>
    </div>
);

export default LoadingScreen;
