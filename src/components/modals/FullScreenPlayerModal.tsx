import React, { FC, useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ICONS } from '../../constants/icons';
import { ALBUMS } from '../../constants/data';
import Button from '../Button';

const FullScreenPlayerModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { currentTrack, currentPlaylist, isPlaying, togglePlay, nextTrack, prevTrack, playTrack } = useApp();
    const [activeTab, setActiveTab] = useState('lyrics');
    const [currentLyricIndex, setCurrentLyricIndex] = useState(-1);

    useEffect(() => {
        if (isPlaying && currentTrack?.lyrics) {
            // Mock lyric synchronization
            const timers = currentTrack.lyrics.map((lyric, index) => 
                setTimeout(() => {
                    setCurrentLyricIndex(index);
                }, lyric.time * 1000)
            );
            return () => timers.forEach(clearTimeout);
        }
    }, [isPlaying, currentTrack]);

    if (!currentTrack || !currentPlaylist) return null;
    
    const album = ALBUMS.find(a => a.name === currentTrack.album);

    return (
        <div className="fixed inset-0 bg-cream z-50 flex flex-col p-4 md:p-8" onClick={onClose}>
            <div className="w-full max-w-4xl mx-auto flex-grow flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-display text-xl font-bold">Now Playing</h2>
                    <button onClick={onClose} className="text-charcoal hover:text-saffron">{ICONS.Close}</button>
                </div>
                
                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col items-center justify-center text-center">
                        <img src={album?.coverUrl} alt={album?.name} className="w-64 h-64 rounded-lg shadow-soft object-cover" />
                        <h3 className="font-serif text-2xl font-bold mt-4">{currentTrack.title}</h3>
                        <p className="text-warmGray">{currentTrack.artist}</p>
                        <div className="w-full max-w-xs my-4">
                            <div className="h-1.5 bg-neutral-300 rounded-full"><div className="h-1.5 w-1/3 bg-saffron rounded-full"></div></div>
                            <div className="flex justify-between text-xs mt-1"><span>1:02</span><span>{currentTrack.duration}</span></div>
                        </div>
                        <div className="flex items-center justify-center space-x-8 text-4xl">
                            <button className="text-warmGray hover:text-charcoal">{ICONS.Shuffle}</button>
                            <button onClick={prevTrack} className="text-warmGray hover:text-charcoal">{ICONS.PrevTrack}</button>
                            <button onClick={togglePlay} className="text-saffron bg-saffron/10 p-3 rounded-full hover:scale-110 transition-transform">
                                {isPlaying ? ICONS.Pause : ICONS.Play}
                            </button>
                            <button onClick={nextTrack} className="text-warmGray hover:text-charcoal">{ICONS.NextTrack}</button>
                            <button className="text-warmGray hover:text-charcoal">{ICONS.Repeat}</button>
                        </div>
                    </div>
                    
                    <div className="bg-neutral-100 rounded-lg p-4 flex flex-col">
                        <div className="flex border-b mb-2">
                             <button onClick={() => setActiveTab('lyrics')} className={`py-2 px-4 font-semibold ${activeTab === 'lyrics' ? 'border-b-2 border-saffron text-saffron' : 'text-warmGray'}`}>Lyrics</button>
                             <button onClick={() => setActiveTab('queue')} className={`py-2 px-4 font-semibold ${activeTab === 'queue' ? 'border-b-2 border-saffron text-saffron' : 'text-warmGray'}`}>Queue</button>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            {activeTab === 'lyrics' && (
                                <div className="space-y-4 text-center font-serif text-lg py-4">
                                    {currentTrack.lyrics ? currentTrack.lyrics.map((line, index) => (
                                        <p key={index} className={`transition-all duration-300 ${currentLyricIndex === index ? 'font-bold text-saffron scale-110' : 'text-warmGray'}`}>{line.text}</p>
                                    )) : <p>No lyrics available for this track.</p>}
                                </div>
                            )}
                            {activeTab === 'queue' && (
                                <div className="space-y-2">
                                    {currentPlaylist.tracks.map((track, index) => (
                                        <button 
                                            key={track.id} 
                                            onClick={() => playTrack(track, currentPlaylist, index)}
                                            className={`w-full text-left p-2 rounded-md flex justify-between items-center ${track.id === currentTrack.id ? 'bg-saffron/20' : 'hover:bg-cream'}`}
                                        >
                                            <p className="font-semibold">{track.title}</p>
                                            <p className="text-sm text-warmGray">{track.duration}</p>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                         {currentTrack.isPremium && <Button variant="outline" className="w-full mt-4 flex items-center justify-center gap-2">{ICONS.Download} Download for Offline Listening</Button>}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FullScreenPlayerModal;
