import React, { FC, useState, useEffect, useRef } from 'react';
import { ICONS } from '../constants/icons';

const CustomVideoPlayer: FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    
    const togglePlay = () => setIsPlaying(!isPlaying);
    
    useEffect(() => {
        isPlaying ? videoRef.current?.play() : videoRef.current?.pause();
    }, [isPlaying]);

    return (
        <div className="relative group aspect-video bg-charcoal rounded-lg overflow-hidden">
            <video ref={videoRef} src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay loop muted className="w-full h-full object-cover" onClick={togglePlay}></video>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <button onClick={togglePlay} className="text-white bg-saffron/50 rounded-full p-4">
                    {isPlaying ? ICONS.Pause : ICONS.Play}
                 </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Progress Bar with Chapter Markers */}
                <div className="relative h-1.5 bg-white/20 rounded-full cursor-pointer">
                    <div className="absolute h-full w-1/2 bg-saffron rounded-full"></div>
                    <div className="absolute h-3 w-1 top-1/2 -translate-y-1/2 bg-white" style={{left: '15%'}} title="Chapter 1"></div>
                    <div className="absolute h-3 w-1 top-1/2 -translate-y-1/2 bg-white" style={{left: '40%'}} title="Chapter 2"></div>
                </div>
                <div className="flex justify-between items-center text-white text-sm mt-1">
                    <div className="flex items-center space-x-4">
                        <button onClick={togglePlay}>{isPlaying ? ICONS.Pause : ICONS.Play}</button>
                        <span>10:30 / 20:00</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button>{ICONS.Speed}</button>
                        <button>720p</button>
                        <button>{ICONS.Fullscreen}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomVideoPlayer;
