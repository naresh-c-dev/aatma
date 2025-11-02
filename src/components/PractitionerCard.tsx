import React, { FC } from 'react';
import { Practitioner } from '../types';
import { useApp } from '../context/AppContext';
import Card from './Card';
import Button from './Button';
import { ICONS } from '../constants/icons';

const PractitionerCard: FC<{ practitioner: Practitioner }> = ({ practitioner }) => {
  const { setPage } = useApp();
  return (
    <Card className="flex flex-col items-center text-center p-6">
      <img src={practitioner.imageUrl} alt={practitioner.name} className="w-24 h-24 rounded-full object-cover border-4 border-saffron/20" />
      <h3 className="font-serif text-xl font-bold mt-4">{practitioner.name}</h3>
      <p className="text-saffron font-semibold">{practitioner.specialty}</p>
      {practitioner.location && <p className="text-sm text-warmGray">{practitioner.location}</p>}
      <div className="flex items-center space-x-1 text-gold my-2">
        <span className="font-bold">{practitioner.rating}</span>
        {ICONS.Star}
      </div>
      <Button onClick={() => setPage('practitioner_profile', practitioner)} className="w-full mt-4">View Profile</Button>
    </Card>
  );
};

export default PractitionerCard;
