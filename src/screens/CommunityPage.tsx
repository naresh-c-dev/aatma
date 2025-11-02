import React, { FC } from 'react';
import { useApp } from '../context/AppContext';
import { COMMUNITY_POSTS } from '../constants/data';
import { ICONS } from '../constants/icons';

const CommunityPage: FC = () => {
    const { setActiveModal } = useApp();
    return (
        <div className="relative h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar">
            {COMMUNITY_POSTS.map((post) => (
                <div key={post.id} className="h-full w-full snap-start flex-shrink-0 relative">
                    <img src={post.videoUrl} alt="Community video" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                        <div className="flex items-center space-x-2">
                            <img src={post.userAvatar} className="w-10 h-10 rounded-full border-2 border-white" alt={post.user} />
                            <p className="font-bold">{post.user}</p>
                        </div>
                        <p className="mt-2 text-sm">{post.caption}</p>
                    </div>
                </div>
            ))}
             <div className="absolute bottom-20 right-4 md:bottom-24 z-10">
                <button onClick={() => setActiveModal('upload')} className="bg-saffron text-white rounded-full p-4 shadow-lg">
                    {ICONS.Plus}
                </button>
            </div>
        </div>
    );
}

export default CommunityPage;
