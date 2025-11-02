export interface User {
  name: string;
  email: string;
  points: number;
}

export interface PractitionerService {
  name: string;
  price: number;
}

export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  price: number;
  imageUrl: string;
  category: 'Veda' | 'Yoga' | 'Arts';
  description: string;
  lessons: Lesson[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  language: string;
}

export interface Lesson {
    id: number;
    title: string;
    isLocked: boolean;
    duration: string;
    unlocksAfter?: string; // For content dripping
}

export interface Practitioner {
    id: number;
    name: string;
    specialty: string;
    location?: string;
    rate?: string;
    rating: number;
    imageUrl: string;
    type: 'Pandit' | 'Astrologer';
    reviews: Review[];
    services: PractitionerService[];
    bio: string;
}

export interface Review {
    author: string;
    rating: number;
    comment: string;
    authorAvatar?: string;
}

export interface Booking {
    id: number;
    service: string;
    practitioner: string;
    date: string;
    status: 'Upcoming' | 'Past';
}

export interface CommunityPost {
  id: number;
  user: string;
  userAvatar: string;
  videoUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

export interface Achievement {
  id: number;
  name: string;
  icon: string; // Using string for icon name from constants
}

export interface Event {
    id: number;
    title: string;
    location: string;
    date: string;
    imageUrl: string;
    price: number;
    category: 'Workshop' | 'Retreat' | 'Festival' | 'Online Session';
    language: string;
    agenda: { time: string, topic: string }[];
    speakers: { name: string, title: string, imageUrl: string }[];
}

export interface Track {
    id: number;
    title: string;
    artist: string;
    album: string;
    duration: string;
    audioUrl: string; // mock url
    isPremium?: boolean;
    lyrics?: { time: number, text: string }[];
}

export interface Album {
    id: number;
    name: string;
    artist: string;
    coverUrl: string;
    tracks: Track[];
}

export interface Artist {
    id: number;
    name: string;
    imageUrl: string;
    bio: string;
}

export interface Playlist {
    id: number;
    name: string;
    description: string;
    coverUrl: string;
    tracks: Track[];
}

export interface LiveSession {
    id: number;
    title: string;
    instructor: string;
    time: string;
    capacity: number;
    enrolled: number;
    imageUrl: string;
    type: string;
}

export type Page = 'home' | 'courses' | 'course_player' | 'services' | 'practitioner_profile' | 'community' | 'events' | 'event_detail' | 'profile' | 'admin' | 'live_event' | 'live_sessions' | 'music_page';

export type ModalType = 'login' | 'signup' | 'booking' | 'checkout' | 'quiz' | 'redeem' | 'upload' | 'chat' | 'call' | 'chat_history' | 'ask_live' | 'group_session_detail' | 'review' | 'group_booking' | 'video_call' | 'call_rating' | 'fullscreen_player' | 'create_playlist' | 'event_registration' | 'registration_confirmation' | null;
