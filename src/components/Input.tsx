import React from 'react';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input 
        {...props} 
        className={`w-full p-2 border border-neutral-300 rounded-md bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent ${props.className}`} 
    />
);

export default Input;
