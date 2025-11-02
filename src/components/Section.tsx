import React, { FC, PropsWithChildren } from 'react';
import { ICONS } from '../constants/icons';

const Section: FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => (
  <section className="py-12 md:py-16">
    <h2 className="text-3xl font-display font-bold text-center">{title}</h2>
    {ICONS.LotusDivider}
    <div className="mt-8">
      {children}
    </div>
  </section>
);

export default Section;
