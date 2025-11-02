// FIX: Corrected import path for types.
import { User, Course, Practitioner, Event, CommunityPost, Playlist, LiveSession, Artist, Album, Track } from '../types/index';

export const DUMMY_USER: User = {
  name: 'Ananya Sharma',
  email: 'ananya@example.com',
  points: 1250,
};

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Vedic Chanting for Beginners',
    instructor: 'Pt. Ramesh Sharma',
    rating: 4.8,
    price: 2999,
    imageUrl: 'https://picsum.photos/seed/course1/400/225',
    category: 'Veda',
    description: 'Learn the fundamentals of Vedic chanting, focusing on pronunciation, rhythm, and the spiritual significance of ancient mantras.',
    lessons: [
      { id: 1, title: 'Introduction to Vedas', duration: '15:00', isLocked: false },
      { id: 2, title: 'The Science of Mantras', duration: '25:00', isLocked: false },
      { id: 3, title: 'Gayatri Mantra: Breakdown', duration: '30:00', isLocked: true, unlocksAfter: 'The Science of Mantras' },
      { id: 4, title: 'Chapters 1 & 2 Quiz', duration: '10:00', isLocked: true, unlocksAfter: 'Gayatri Mantra: Breakdown' },
    ],
    level: 'Beginner',
    duration: '10 Hours',
    language: 'Sanskrit'
  },
  {
    id: 2,
    title: 'Ashtanga Yoga Immersion',
    instructor: 'Yogini Priya',
    rating: 4.9,
    price: 4999,
    imageUrl: 'https://picsum.photos/seed/course2/400/225',
    category: 'Yoga',
    description: 'A deep dive into the primary series of Ashtanga Yoga. Build strength, flexibility, and a disciplined mind.',
    lessons: [],
    level: 'Intermediate',
    duration: '25 Hours',
    language: 'English'
  },
  {
    id: 3,
    title: 'Madhubani Painting Workshop',
    instructor: 'Kala Devi',
    rating: 4.7,
    price: 1999,
    imageUrl: 'https://picsum.photos/seed/course3/400/225',
    category: 'Arts',
    description: 'Discover the ancient folk art of Madhubani. Learn the traditional techniques, motifs, and storytelling aspects of this beautiful art form.',
    lessons: [],
    level: 'Beginner',
    duration: '8 Hours',
    language: 'Hindi'
  },
];

export const ASTROLOGERS: Practitioner[] = [
    {
        id: 1,
        name: 'Astrologer V. Kumar',
        specialty: 'Vedic Astrology, Numerology',
        location: 'Varanasi, India',
        rating: 4.9,
        imageUrl: 'https://picsum.photos/seed/astro1/200/200',
        type: 'Astrologer',
        services: [
            { name: 'Birth Chart Reading', price: 2500 },
            { name: 'Career Astrology', price: 1500 },
            { name: 'Relationship Compatibility', price: 2000 },
        ],
        reviews: [
            { author: 'Rohan V.', rating: 5, comment: 'Very insightful reading. Highly recommended.', authorAvatar: 'https://picsum.photos/seed/user2/40/40' },
        ],
        bio: 'With over 20 years of experience, V. Kumar provides deep insights into life paths using ancient Vedic principles. His guidance has helped thousands find clarity and purpose.'
    },
    {
        id: 3,
        name: 'Dr. Anjali Sharma',
        specialty: 'Tarot Reading, Palmistry',
        location: 'Mumbai, India',
        rating: 4.8,
        imageUrl: 'https://picsum.photos/seed/astro2/200/200',
        type: 'Astrologer',
        services: [{ name: 'Tarot Session', price: 1800 }],
        reviews: [],
        bio: 'Dr. Anjali combines traditional knowledge with intuitive tarot reading to offer guidance on love, career, and personal growth. Her compassionate approach makes clients feel at ease.'
    },
    {
        id: 4,
        name: 'Jyotish Acharya Ram',
        specialty: 'KP Astrology',
        rating: 4.7,
        imageUrl: 'https://picsum.photos/seed/astro3/200/200',
        type: 'Astrologer',
        services: [{ name: 'Horoscope Analysis', price: 2100 }],
        reviews: [],
        bio: 'A master of the Krishnamurti Paddhati system, Acharya Ram offers precise predictions and remedies for life\'s challenges.'
    },
    {
        id: 5,
        name: 'Nakshatra Jyoti',
        specialty: 'Nakshatra Analysis',
        location: 'Online',
        rating: 4.9,
        imageUrl: 'https://picsum.photos/seed/astro4/200/200',
        type: 'Astrologer',
        services: [{ name: 'Nakshatra Reading', price: 3000 }],
        reviews: [],
        bio: 'Specializing in the lunar mansions (Nakshatras), Jyoti unveils the subtle energies influencing your personality and destiny.'
    }
];

export const PANDITS: Practitioner[] = [
    {
        id: 2,
        name: 'Pandit S. Tripathi',
        specialty: 'Griha Pravesh, Satyanarayan Pooja',
        location: 'Delhi, India',
        rating: 4.8,
        imageUrl: 'https://picsum.photos/seed/pandit1/200/200',
        type: 'Pandit',
        services: [
            { name: 'Satyanarayan Pooja at Home', price: 5100 },
            { name: 'Griha Pravesh (House Warming)', price: 7500 },
        ],
        reviews: [],
        bio: 'An expert in traditional Hindu rituals, Pandit Tripathi performs ceremonies with utmost devotion and adherence to Vedic scriptures, bringing peace and prosperity.'
    },
];

export const EVENTS: Event[] = [
    {
        id: 1,
        title: 'Himalayan Yoga Retreat',
        location: 'Rishikesh, Uttarakhand',
        date: '15-22 Nov 2024',
        imageUrl: 'https://picsum.photos/seed/event1/400/300',
        price: 25000,
        category: 'Retreat',
        language: 'English',
        agenda: [
            { time: '06:00 AM', topic: 'Sunrise Yoga & Meditation' },
            { time: '08:00 AM', topic: 'Sattvic Breakfast' },
            { time: '10:00 AM', topic: 'Philosophy Workshop' },
            { time: '04:00 PM', topic: 'Ganga Aarti' },
        ],
        speakers: [
            { name: 'Yogi Adityanath', title: 'Himalayan Yoga Master', imageUrl: 'https://picsum.photos/seed/speaker1/100/100' }
        ]
    },
    {
        id: 2,
        title: 'Art of Living: Happiness Program',
        location: 'Online Workshop',
        date: 'Every Weekend',
        imageUrl: 'https://picsum.photos/seed/event2/400/300',
        price: 1500,
        category: 'Online Session',
        language: 'Hindi',
        agenda: [],
        speakers: []
    },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
    {
        id: 1,
        user: 'YogaWithPriya',
        userAvatar: 'https://picsum.photos/seed/user2/40/40',
        videoUrl: 'https://picsum.photos/seed/comm1/360/640.jpg',
        caption: 'Sunrise Surya Namaskar flow to start the day right! ☀️ #yoga #goodvibes',
        likes: 1254,
        comments: 88,
    },
    {
        id: 2,
        user: 'MantraChants',
        userAvatar: 'https://picsum.photos/seed/user3/40/40',
        videoUrl: 'https://picsum.photos/seed/comm2/360/640.jpg',
        caption: 'Listen to the powerful vibrations of the Mahamrityunjaya Mantra. 🙏',
        likes: 2301,
        comments: 150,
    }
];

export const ARTISTS: Artist[] = [
  { id: 1, name: 'Anuradha Paudwal', imageUrl: 'https://picsum.photos/seed/artist1/200/200', bio: 'A revered Indian playback singer who works predominantly in Hindi cinema.' },
  { id: 2, name: 'Hariharan', imageUrl: 'https://picsum.photos/seed/artist2/200/200', bio: 'An Indian playback and ghazal singer, a prominent Indian classical singer.' },
  { id: 3, name: 'Jagjit Singh', imageUrl: 'https://picsum.photos/seed/artist3/200/200', bio: 'An Indian classical singer, composer and musician. Known as the "Ghazal King".' },
];

const allTracks: Track[] = [
    { id: 1, title: 'Ganesh Vandana', artist: 'Anuradha Paudwal', album: 'Divine Chants', duration: '05:30', audioUrl: '', isPremium: true, lyrics: [{time: 0, text: 'Vakratunda Mahakaya Suryakoti Samaprabha'}, {time: 5, text: 'Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvada'}] },
    { id: 2, title: 'Gayatri Mantra', artist: 'Anuradha Paudwal', album: 'Divine Chants', duration: '10:00', audioUrl: '', lyrics: [{time: 0, text: 'Om bhur bhuvaḥ svaha'}, {time: 3, text: 'tat savitur vareṇyaṃ'}, {time: 6, text: 'bhargo devasya dhimahi'}, {time: 9, text: 'dhiyo yo naḥ prachodayat'}] },
    { id: 3, title: 'Ohm Chanting', artist: 'Various Artists', album: 'Meditation Gold', duration: '15:00', audioUrl: '' },
    { id: 4, title: 'Flute Meditation', artist: 'Various Artists', album: 'Meditation Gold', duration: '12:45', audioUrl: '' },
    { id: 5, title: 'Hanuman Chalisa', artist: 'Hariharan', album: 'Shri Hanuman', duration: '09:41', audioUrl: '', isPremium: true },
    { id: 6, title: 'Govind Bolo', artist: 'Jagjit Singh', album: 'Krishna Bhajans', duration: '07:20', audioUrl: '' },
];

export const ALBUMS: Album[] = [
  { id: 1, name: 'Divine Chants', artist: 'Anuradha Paudwal', coverUrl: 'https://picsum.photos/seed/album1/400/400', tracks: [allTracks[0], allTracks[1]] },
  { id: 2, name: 'Meditation Gold', artist: 'Various Artists', coverUrl: 'https://picsum.photos/seed/album2/400/400', tracks: [allTracks[2], allTracks[3]] },
  { id: 3, name: 'Shri Hanuman', artist: 'Hariharan', coverUrl: 'https://picsum.photos/seed/album3/400/400', tracks: [allTracks[4]] },
  { id: 4, name: 'Krishna Bhajans', artist: 'Jagjit Singh', coverUrl: 'https://picsum.photos/seed/album4/400/400', tracks: [allTracks[5]] },
];

export const PLAYLISTS: Playlist[] = [
    {
        id: 1,
        name: 'Morning Mantras',
        description: 'Start your day with positive energy.',
        coverUrl: 'https://picsum.photos/seed/playlist1/400/400',
        tracks: [allTracks[1], allTracks[0]]
    },
    {
        id: 2,
        name: 'Deep Meditation',
        description: 'Music for focus and relaxation.',
        coverUrl: 'https://picsum.photos/seed/playlist2/400/400',
        tracks: [allTracks[2], allTracks[3]]
    },
     {
        id: 3,
        name: 'Evening Bhajans',
        description: 'Peaceful bhajans for the evening.',
        coverUrl: 'https://picsum.photos/seed/playlist3/400/400',
        tracks: [allTracks[5], allTracks[4]]
    }
];

export const LIVE_SESSIONS: LiveSession[] = [
    {
        id: 1,
        title: 'Guided Meditation for Stress Relief',
        instructor: 'Swami Gyan',
        time: '7:00 PM Today',
        capacity: 100,
        enrolled: 45,
        imageUrl: 'https://picsum.photos/seed/live1/400/225',
        type: 'Meditation',
    },
    {
        id: 2,
        title: 'Yin Yoga for Deep Relaxation',
        instructor: 'Yogini Mira',
        time: '8:00 AM Tomorrow',
        capacity: 50,
        enrolled: 22,
        imageUrl: 'https://picsum.photos/seed/live2/400/225',
        type: 'Yoga',
    },
];
