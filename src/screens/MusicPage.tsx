import React, { FC, useState } from 'react';
import { PLAYLISTS, ALBUMS, ARTISTS } from '../constants/data';
import { ICONS } from '../constants/icons';
import { useApp } from '../context/AppContext';
import Card from '../components/Card';
import Button from '../components/Button';

const MusicPage: FC = () => {
    const { playTrack } = useApp();
    const [activeTab, setActiveTab] = useState('playlists');

    return (
        <div className="space-y-8">
            <h1 className="font-display text-3xl font-bold">Spiritual Music Library</h1>

            <div className="border-b border-neutral-300 flex space-x-4">
                <button onClick={() => setActiveTab('playlists')} className={`py-2 px-4 font-semibold ${activeTab === 'playlists' ? 'border-b-2 border-saffron text-saffron' : 'text-warmGray'}`}>Playlists</button>
                <button onClick={() => setActiveTab('albums')} className={`py-2 px-4 font-semibold ${activeTab === 'albums' ? 'border-b-2 border-saffron text-saffron' : 'text-warmGray'}`}>Albums</button>
                <button onClick={() => setActiveTab('artists')} className={`py-2 px-4 font-semibold ${activeTab === 'artists' ? 'border-b-2 border-saffron text-saffron' : 'text-warmGray'}`}>Artists</button>
            </div>
            
            {activeTab === 'playlists' && (
                <div>
                    <h2 className="font-display text-2xl font-bold mb-4">Featured Playlists</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {PLAYLISTS.map(playlist => (
                            <Card key={playlist.id}>
                                <img src={playlist.coverUrl} alt={playlist.name} className="w-full h-40 object-cover" />
                                <div className="p-3">
                                    <h3 className="font-serif font-bold truncate">{playlist.name}</h3>
                                    <p className="text-sm text-warmGray truncate">{playlist.description}</p>
                                    <Button onClick={() => playTrack(playlist.tracks[0], playlist, 0)} className="w-full mt-2 text-sm py-1">Play</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'albums' && (
                <div>
                    <h2 className="font-display text-2xl font-bold mb-4">New Releases</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {ALBUMS.map(album => (
                             <Card key={album.id}>
                                <div className="relative">
                                    <img src={album.coverUrl} alt={album.name} className="w-full h-40 object-cover" />
                                    {album.tracks.some(t => t.isPremium) && <span className="absolute bottom-2 right-2 bg-gold text-white text-xs font-bold px-2 py-1 rounded">320kbps</span>}
                                </div>
                                <div className="p-3">
                                    <h3 className="font-serif font-bold truncate">{album.name}</h3>
                                    <p className="text-sm text-warmGray truncate">{album.artist}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'artists' && (
                 <div>
                    <h2 className="font-display text-2xl font-bold mb-4">Featured Artists</h2>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {ARTISTS.map(artist => (
                             <Card key={artist.id} className="p-4 text-center">
                                <img src={artist.imageUrl} alt={artist.name} className="w-24 h-24 rounded-full object-cover mx-auto" />
                                <h3 className="font-serif font-bold mt-2">{artist.name}</h3>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MusicPage;
