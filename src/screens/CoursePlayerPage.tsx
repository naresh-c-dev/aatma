import React, { FC } from 'react';
import { useApp } from '../context/AppContext';
import { Lesson } from '../types';
import Card from '../components/Card';
import Button from '../components/Button';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import { ICONS } from '../constants/icons';

const CoursePlayerPage: FC = () => {
    const { pageContext: course, setActiveModal } = useApp();
    if (!course) return <div>Course not found.</div>;

    const completedLessons = course.lessons.filter((l: Lesson) => !l.isLocked).length;
    const totalLessons = course.lessons.length;
    const progressPercent = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow lg:w-2/3">
                <CustomVideoPlayer />
                <h1 className="font-display text-3xl font-bold mt-4">{course.title}</h1>
                <p className="text-lg text-warmGray">by {course.instructor}</p>
                <div className="my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 flex flex-col items-center justify-center text-center">
                        <div className="relative w-24 h-24">
                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                <path className="text-neutral-300" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-saffron" strokeWidth="3" strokeDasharray={`${progressPercent}, 100`} fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                             <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">{progressPercent}%</div>
                        </div>
                        <p className="font-semibold mt-2">Course Progress</p>
                    </Card>
                    <Card className="p-4 flex flex-col items-center justify-center text-center">
                        <p className="font-bold text-3xl text-saffron">{completedLessons}/{totalLessons}</p>
                        <p className="font-semibold mt-2">Lessons Completed</p>
                    </Card>
                     <Card className="p-4 flex flex-col items-center justify-center text-center">
                        <p className="font-bold text-3xl text-saffron">3h 45m</p>
                        <p className="font-semibold mt-2">Time Spent</p>
                    </Card>
                </div>
                <p className="mt-4 text-warmGray">{course.description}</p>
                 <Button onClick={() => setActiveModal('booking')} className="mt-6">Book 1:1 Session</Button>
            </div>
            <div className="lg:w-1/3">
                <h2 className="font-display text-2xl font-bold mb-4">Curriculum</h2>
                <div className="space-y-2">
                    {course.lessons.map((lesson: Lesson, index: number) => (
                        <div key={lesson.id} className={`p-3 rounded-md flex justify-between items-start ${lesson.isLocked ? 'bg-neutral-200 text-gray-500' : 'bg-neutral-100 cursor-pointer hover:bg-cream'}`}>
                            <div className="flex">
                                <span className="font-bold mr-3">{index + 1}</span>
                                <div>
                                    <p className="font-semibold">{lesson.title}</p>
                                    <p className="text-xs">{lesson.duration}</p>
                                    {lesson.isLocked && lesson.unlocksAfter && (
                                        <p className="text-xs text-saffron mt-1">Unlocks after completing "{lesson.unlocksAfter}"</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex-shrink-0 ml-2">
                                {lesson.isLocked ? <span className="text-saffron">{ICONS.Lock}</span> : <button className="flex items-center text-xs text-saffron font-semibold"><span className="mr-1">{ICONS.Download}</span> DL</button>}
                            </div>
                        </div>
                    ))}
                    <div className="pt-4">
                        <Button onClick={() => setActiveModal('quiz')} className="w-full" disabled={!course.lessons.find((l: Lesson) => l.title.includes('Quiz')) || course.lessons.find((l: Lesson) => l.title.includes('Quiz'))?.isLocked}>Start Quiz</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePlayerPage;
