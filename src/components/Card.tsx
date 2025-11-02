import React, { FC, PropsWithChildren } from 'react';

const Card: FC<PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`bg-neutral-100 rounded-lg shadow-soft overflow-hidden transition-all duration-300 hover:shadow-soft-hover hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

export default Card;
