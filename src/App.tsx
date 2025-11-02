import React, { FC } from 'react';
import { useApp } from './context/AppContext';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Toast from './components/Toast';
import PersistentMusicPlayer from './components/PersistentMusicPlayer';
import { 
    HomePage, CoursesPage, CoursePlayerPage, ServicesPage, 
    PractitionerProfilePage, CommunityPage, EventsPage, EventDetailPage, 
    ProfilePage, AdminDashboard, LiveEventPage, MusicPage, LiveSessionsPage 
} from './screens';
import { 
    AuthModal, BookingModal, CheckoutModal, QuizModal, RedeemPointsModal, UploadModal,
    ChatInterface, ChatHistoryModal, AskLiveModal, GroupSessionDetailModal, ReviewModal,
    GroupBookingModal, VideoCallModal, CallRatingModal, FullScreenPlayerModal,
    EventRegistrationModal, RegistrationConfirmationModal
} from './components/modals';
import { Page } from './types/index';


const pages: Record<Page, FC> = {
  home: HomePage,
  courses: CoursesPage,
  course_player: CoursePlayerPage,
  services: ServicesPage,
  practitioner_profile: PractitionerProfilePage,
  community: CommunityPage,
  events: EventsPage,
  event_detail: EventDetailPage,
  profile: ProfilePage,
  admin: AdminDashboard,
  live_event: LiveEventPage,
  music_page: MusicPage,
  live_sessions: LiveSessionsPage,
};

const App: FC = () => {
    const { page, activeModal, setActiveModal, toastMessage, setToastMessage, isPlayerVisible } = useApp();
    const PageComponent = pages[page] || HomePage;

    const renderModal = () => {
        if (!activeModal) return null;

        const closeModal = () => setActiveModal(null);

        switch (activeModal) {
            case 'login':
                return <AuthModal isLogin={true} onSwitch={() => setActiveModal('signup')} onClose={closeModal} />;
            case 'signup':
                return <AuthModal isLogin={false} onSwitch={() => setActiveModal('login')} onClose={closeModal} />;
            case 'booking':
                return <BookingModal onClose={closeModal} />;
            case 'checkout':
                return <CheckoutModal onClose={closeModal} />;
            case 'quiz':
                return <QuizModal onClose={closeModal} />;
            case 'redeem':
                return <RedeemPointsModal onClose={closeModal} />;
            case 'upload':
                return <UploadModal onClose={closeModal} />;
            case 'chat':
                return <ChatInterface onClose={closeModal} />;
            case 'chat_history':
                return <ChatHistoryModal onClose={closeModal} />;
            case 'ask_live':
                return <AskLiveModal onClose={closeModal} />;
            case 'group_session_detail':
                return <GroupSessionDetailModal onClose={closeModal} />;
            case 'review':
                return <ReviewModal onClose={closeModal} />;
            case 'group_booking':
                return <GroupBookingModal onClose={closeModal} />;
            case 'video_call':
                return <VideoCallModal onClose={closeModal} />;
            case 'call_rating':
                return <CallRatingModal onClose={closeModal} />;
            case 'fullscreen_player':
                return <FullScreenPlayerModal onClose={closeModal} />;
            case 'event_registration':
                return <EventRegistrationModal onClose={closeModal} />;
            case 'registration_confirmation':
                return <RegistrationConfirmationModal onClose={closeModal} />;
            default:
                return null;
        }
    };

    return (
        <div className="font-sans bg-cream text-charcoal min-h-screen">
            <Header />
            <main className={`container mx-auto px-4 py-8 pb-24 md:pb-8 transition-all duration-300 ${isPlayerVisible ? 'md:pb-24' : ''}`}>
                <PageComponent />
            </main>
            {isPlayerVisible && <PersistentMusicPlayer />}
            <BottomNav />
            {toastMessage && <Toast message={toastMessage} onHide={() => setToastMessage(null)} />}
            {renderModal()}
        </div>
    );
};
export default App;
