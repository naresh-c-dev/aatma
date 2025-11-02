import React, { FC, useState, useEffect } from 'react';

const Toast: FC<{ message: string, onHide: () => void }> = ({ message, onHide }) => {
    const [isExiting, setIsExiting] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(onHide, 500);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onHide]);

    return (
        <div className={`fixed bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 bg-charcoal text-white px-6 py-3 rounded-full shadow-lg z-50 ${isExiting ? 'animate-toastOut' : 'animate-toastIn'}`}>
            {message}
        </div>
    );
};

export default Toast;
