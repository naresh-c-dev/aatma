import React, { FC } from 'react';
import { useApp } from '../context/AppContext';
import { ICONS } from '../constants/icons';
import { ALBUMS } from '../constants/data';

const PersistentMusicPlayer: FC = () => {
    const { 
        currentTrack, 
        isPlaying, 
        togglePlay, 
        nextTrack, 
        prevTrack, 
        setActiveModal 
    } = useApp();

    if (!currentTrack) return null;
    
    const album = ALBUMS.find(a => a.name === currentTrack.album);

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 h-16 md:h-20 bg-charcoal text-white shadow-lg animate-fadeInUp">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <div 
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => setActiveModal('fullscreen_player')}
                >
                    <img src={album?.coverUrl} alt={album?.name} className="w-12 h-12 rounded-md object-cover" />
                    <div>
                        <p className="font-bold text-sm">{currentTrack.title}</p>
                        <p className="text-xs text-neutral-300">{currentTrack.artist}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-2xl">
                    {/* FIX: Removed ineffective type cast which was causing an error. The underlying type issue is fixed in icons.tsx. */}
                    <button onClick={prevTrack} className="hidden md:block hover:text-saffron">{React.cloneElement(ICONS.PrevTrack, { className: 'w-8 h-8' })}</button>
                    <button onClick={togglePlay} className="text-saffron bg-white/10 rounded-full p-2 hover:scale-110 transition-transform">
                        {/* FIX: Removed ineffective type cast which was causing an error. The underlying type issue is fixed in icons.tsx. */}
                        {isPlaying ? React.cloneElement(ICONS.Pause, { className: 'w-8 h-8' }) : React.cloneElement(ICONS.Play, { className: 'w-8 h-8' })}
                    </button>
                    {/* FIX: Removed ineffective type cast which was causing an error. The underlying type issue is fixed in icons.tsx. */}
                    <button onClick={nextTrack} className="hover:text-saffron">{React.cloneElement(ICONS.NextTrack, { className: 'w-8 h-8' })}</button>
                </div>
            </div>
        </div>
    );
};

export default PersistentMusicPlayer;