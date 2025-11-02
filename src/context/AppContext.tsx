import React, { createContext, useState, useCallback, useContext, FC, PropsWithChildren } from 'react';
// FIX: Corrected import path for types.
import { Page, ModalType, User, Track, Playlist } from '../types/index';
import { DUMMY_USER } from '../constants/data';

export interface AppContextType {
  page: Page;
  setPage: (page: Page, context?: any) => void;
  activeModal: ModalType;
  setActiveModal: (modal: ModalType, context?: any) => void;
  showToast: (message: string) => void;
  toastMessage: string | null;
  setToastMessage: (message: string | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  pageContext: any;
  modalContext: any;
  // Music Player State
  currentTrack: Track | null;
  currentPlaylist: Playlist | null;
  isPlaying: boolean;
  isPlayerVisible: boolean;
  playTrack: (track: Track, playlist: Playlist, trackIndex: number) => void;
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within an AppProvider");
    return context;
};

export const AppProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [page, setPage] = useState<Page>('home');
  const [pageContext, setPageContext] = useState<any>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalContext, setModalContext] = useState<any>(null);
  const [user, setUser] = useState<User | null>(DUMMY_USER); // Start logged in for demo purposes
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Music Player State
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState<boolean>(false);


  const handleSetPage = useCallback((newPage: Page, context: any = null) => {
    window.scrollTo(0, 0);
    setPage(newPage);
    setPageContext(context);
  }, []);
  
  const handleSetActiveModal = useCallback((newModal: ModalType, context: any = null) => {
    setActiveModal(newModal);
    setModalContext(context);
  }, []);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
  }, []);

  const playTrack = useCallback((track: Track, playlist: Playlist, trackIndex: number) => {
    setCurrentTrack(track);
    setCurrentPlaylist(playlist);
    setCurrentTrackIndex(trackIndex);
    setIsPlaying(true);
    setIsPlayerVisible(true);
  }, []);

  const togglePlay = useCallback(() => {
    if (currentTrack) {
        setIsPlaying(prev => !prev);
    }
  }, [currentTrack]);
  
  const nextTrack = useCallback(() => {
      if (currentPlaylist) {
          const nextIndex = (currentTrackIndex + 1) % currentPlaylist.tracks.length;
          setCurrentTrackIndex(nextIndex);
          setCurrentTrack(currentPlaylist.tracks[nextIndex]);
          setIsPlaying(true);
      }
  }, [currentPlaylist, currentTrackIndex]);

  const prevTrack = useCallback(() => {
      if (currentPlaylist) {
          const prevIndex = (currentTrackIndex - 1 + currentPlaylist.tracks.length) % currentPlaylist.tracks.length;
          setCurrentTrackIndex(prevIndex);
          setCurrentTrack(currentPlaylist.tracks[prevIndex]);
          setIsPlaying(true);
      }
  }, [currentPlaylist, currentTrackIndex]);


  const appContextValue: AppContextType = {
    page,
    setPage: handleSetPage,
    activeModal,
    setActiveModal: handleSetActiveModal,
    showToast,
    toastMessage,
    setToastMessage,
    user,
    setUser,
    pageContext,
    modalContext,
    currentTrack,
    currentPlaylist,
    isPlaying,
    isPlayerVisible,
    playTrack,
    togglePlay,
    nextTrack,
    prevTrack
  };
    
  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  )
}
