export interface User {
  name: string;
  email: string;
  points: number;
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
}

export interface Review {
    author: string;
    rating: number;
    comment: string;
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
}

export interface Track {
    id: number;
    title: string;
    duration: string;
}

export interface Playlist {
    id: number;
    name: string;
    description: string;
    tracks: Track[];
}

export interface LiveSession {
    id: number;
    title: string;
    instructor: string;
    time: string;
    capacity: number;
    enrolled: number;
}

export type Page = 'home' | 'courses' | 'course_player' | 'services' | 'practitioner_profile' | 'community' | 'events' | 'event_detail' | 'profile' | 'admin' | 'live_event' | 'live_sessions' | 'music_page';

export type ModalType = 'login' | 'signup' | 'booking' | 'checkout' | 'quiz' | 'redeem' | 'upload' | 'chat' | 'call' | 'chat_history' | 'ask_live' | null;