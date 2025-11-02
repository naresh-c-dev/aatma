import React from 'react';

type IconProps = { className?: string };

const Icon: React.FC<{ d: string | string[]; className?: string; viewBox?: string }> = ({ d, className, viewBox = "0 0 24 24" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={viewBox} strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        {Array.isArray(d) ? d.map((path, i) => <path key={i} strokeLinecap="round" strokeLinejoin="round" d={path} />) : <path strokeLinecap="round" strokeLinejoin="round" d={d} />}
    </svg>
);

const Logo: React.FC<IconProps> = ({ className }) => <div className={className}>🕉️</div>;
const Courses: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />;
const Services: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />;
const Music: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V7.5A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.75" />;
const Community: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.282A2.25 2.25 0 0110.5 12c.5 0 .964.176 1.32.474m-2.82 2.282a2.25 2.25 0 01-2.47-2.471 3 3 0 00-4.682-2.72 9.09 9.09 0 003.74.479m4.11-1.375a2.25 2.25 0 00-3.472-2.122m3.472 2.122a2.25 2.25 0 01-3.472-2.122m0 0A2.25 2.25 0 0110.5 9.75c.5 0 .964.176 1.32.474m-2.82 2.282a2.25 2.25 0 01-2.47-2.471m5.29-2.727a3 3 0 00-4.682-2.72 9.09 9.09 0 003.74.479" />;
const LotusDivider: React.FC<IconProps> = ({ className }) => <div className="flex justify-center items-center my-4"><div className="w-24 h-px bg-neutral-300"></div><Icon className="w-8 h-8 text-saffron/50 mx-4" d="M12 2.25c.963 1.018 1.48 2.454 1.48 4.25 0 1.594-.37 3.011-.998 4.233-1.485 2.923-4.965 2.923-6.45 0C5.39 9.511 5.02 8.094 5.02 6.5 5.02 4.704 5.537 3.268 6.5 2.25A2.25 2.25 0 018.75 1.5h5.5a2.25 2.25 0 012.25 2.25V12c0 2.21-1.79 4-4 4s-4-1.79-4-4V3.75a2.25 2.25 0 012.25-2.25h.01z" /> <div className="w-24 h-px bg-neutral-300"></div></div>;
// FIX: Update Search component to accept an optional `d` prop to allow overriding the icon path.
const Search: React.FC<IconProps & { d?: string | string[] }> = ({ className, d }) => <Icon className={className} d={d || "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"} />;
const Notifications: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.31 5.632l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163V7.5A2.25 2.25 0 015.25 5.25h13.5A2.25 2.25 0 0121 7.5v.632a2.25 2.25 0 001.632 2.163l2.31.66a1.803 1.803 0 01-.99 3.467l-1.32-.377a23.848 23.848 0 00-5.454 1.31" />;
const Cart: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.093-.822l-1.423-5.692a.75.75 0 00-.693-.608H7.5M17.25 9L15 12" />;
const Home: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />;
const User: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />;
const Ohm: React.FC<IconProps> = ({ className }) => <div className={className}>🕉️</div>;
const Star: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />;
const Lock: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />;
const Download: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />;
const Pause: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M15.75 5.25v13.5m-6-13.5v13.5" />;
const Play: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />;
const Speed: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9.75v3.75m3-2.25v.75" />;
const Fullscreen: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m4.5 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />;
const Certificate: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
const Close: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M6 18L18 6M6 6l12 12" />;
const Visa: React.FC<IconProps> = ({ className }) => <div className={className}>VISA</div>;
const Mastercard: React.FC<IconProps> = ({ className }) => <div className={className}>MC</div>;
const GPay: React.FC<IconProps> = ({ className }) => <div className={className}>GPay</div>;
const Paytm: React.FC<IconProps> = ({ className }) => <div className={className}>Paytm</div>;
const Plus: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M12 4.5v15m7.5-7.5h-15" />;
const Camera: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316zM12 15a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" />;
const Gift: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5v-8.25M12 4.875A2.625 2.625 0 1014.625 7.5H9.375A2.625 2.625 0 1012 4.875zM21 11.25H3" />;
const Lotus: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M12 2.25c.963 1.018 1.48 2.454 1.48 4.25 0 1.594-.37 3.011-.998 4.233-1.485 2.923-4.965 2.923-6.45 0C5.39 9.511 5.02 8.094 5.02 6.5 5.02 4.704 5.537 3.268 6.5 2.25A2.25 2.25 0 018.75 1.5h5.5a2.25 2.25 0 012.25 2.25V12c0 2.21-1.79 4-4 4s-4-1.79-4-4V3.75a2.25 2.25 0 012.25-2.25h.01z" />;
const PrevTrack: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M21 16.5c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 16.5v-9A1.125 1.125 0 014.125 6.375h15.75A1.125 1.125 0 0121 7.5v9zM18 12L9 7.5v9l9-4.5z" />;
const NextTrack: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M3 8.25V15.75a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 15.75V8.25a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 8.25zM15 12L9 16.5v-9L15 12z" />;
const Upload: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />;

const Map: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M9 6.75V15m6-6v8.25m.5-10.5h-13a.5.5 0 00-.5.5v13c0 .276.224.5.5.5h13a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5z" />;
const Calendar: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008zM12 15h.008v.008H12v-.008zM9.75 12.75h.008v.008H9.75v-.008zM9.75 15h.008v.008H9.75v-.008zM7.5 12.75h.008v.008H7.5v-.008zM7.5 15h.008v.008H7.5v-.008zM14.25 12.75h.008v.008h-.008v-.008zM14.25 15h.008v.008h-.008v-.008zM16.5 12.75h.008v.008h-.008v-.008zM16.5 15h.008v.008h-.008v-.008z" />;
const List: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />;
const Shuffle: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M19.5 12c0-2.03-1.03-3.83-2.59-4.92A6.994 6.994 0 0012 6c-3.59 0-6.56 2.62-6.95 6H12v3l3.5-3.5L12 12v0zm0 4.5a.75.75 0 100-1.5.75.75 0 000 1.5zm-15-7.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />;
const Repeat: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M19.5 7.5v3m0 0v3m0-3h-15m7.5-3l-3.5 3.5 3.5 3.5" />;
const Queue: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.25 4.5h13.5" />;
const QrCode: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M4.5 4.5v15h15v-15h-15zM9 9h6v6H9V9z M4.5 4.5v3h3v-3h-3z M4.5 12h3v3h-3v-3z M12 4.5h3v3h-3v-3z" />;
const AddToCalendar: React.FC<IconProps> = ({ className }) => <Icon className={className} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75zM12 12.75h.008v.008H12v-.008zM12 15h.008v.008H12v-.008zM9.75 12.75h.008v.008H9.75v-.008zM9.75 15h.008v.008H9.75v-.008zM7.5 12.75h.008v.008H7.5v-.008zM7.5 15h.008v.008H7.5v-.008z" />;

// FIX: Update the type of the ICONS object to allow cloning with `className` and `d` props, fixing type errors.
export const ICONS: { [key: string]: React.ReactElement<{ className?: string; d?: string | string[] }> } = {
    Logo: <Logo />,
    Courses: <Courses />,
    Services: <Services />,
    Music: <Music />,
    Community: <Community />,
    LotusDivider: <LotusDivider />,
    Search: <Search />,
    Notifications: <Notifications />,
    Cart: <Cart />,
    Home: <Home />,
    User: <User />,
    Ohm: <Ohm />,
    Star: <Star />,
    Lock: <Lock />,
    Download: <Download />,
    Pause: <Pause />,
    Play: <Play />,
    Speed: <Speed />,
    Fullscreen: <Fullscreen />,
    Certificate: <Certificate />,
    Close: <Close />,
    Visa: <Visa />,
    Mastercard: <Mastercard />,
    GPay: <GPay />,
    Paytm: <Paytm />,
    Plus: <Plus />,
    Camera: <Camera />,
    Gift: <Gift />,
    Lotus: <Lotus />,
    PrevTrack: <PrevTrack />,
    NextTrack: <NextTrack />,
    Upload: <Upload />,
    Map: <Map />,
    Calendar: <Calendar />,
    List: <List />,
    Shuffle: <Shuffle />,
    Repeat: <Repeat />,
    Queue: <Queue />,
    QrCode: <QrCode />,
    AddToCalendar: <AddToCalendar />,
};