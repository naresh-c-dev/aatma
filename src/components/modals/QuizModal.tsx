import React, { FC, useState } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Button from '../Button';
import { ICONS } from '../../constants/icons';

const QuizModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { showToast } = useApp();
    const [step, setStep] = useState('start'); // 'start', 'question', 'results'

    const handleFinish = () => {
        showToast("+50 Points Added for completing the quiz!");
        onClose();
    };

    return (
        <Modal title="Chapters 1 & 2 Quiz" onClose={onClose}>
            {step === 'start' && (
                <div className="text-center">
                    <h3 className="font-serif text-xl font-bold">Test Your Knowledge</h3>
                    <p className="text-warmGray my-2">This quiz has 3 questions and should take about 5 minutes.</p>
                    <div className="my-4 p-2 bg-saffron/10 rounded-lg text-saffron font-bold">Timer: 10:00</div>
                    <Button onClick={() => setStep('question')} className="w-full">Start Quiz</Button>
                </div>
            )}
            {step === 'question' && (
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Question 1 of 3</p>
                        <p className="font-bold text-saffron">09:45</p>
                    </div>
                    <p className="font-semibold">What is Dharma?</p>
                    <div className="space-y-2">
                        <button onClick={() => setStep('results')} className="block w-full text-left p-2 border rounded hover:bg-cream">A. One's duty or righteous path</button>
                        <button className="block w-full text-left p-2 border rounded hover:bg-cream">B. A type of meditation</button>
                    </div>
                </div>
            )}
             {step === 'results' && (
                <div className="text-center">
                    <h3 className="font-serif text-xl font-bold">Quiz Complete!</h3>
                    <div className="my-4">
                        <div className="relative w-32 h-32 mx-auto">
                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                <path className="text-neutral-300" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                <path className="text-green-500" strokeWidth="4" strokeDasharray={`66, 100`} fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            </svg>
                             <div className="absolute inset-0 flex flex-col items-center justify-center">
                                 <span className="font-bold text-3xl">66%</span>
                                 <span className="text-sm">Score</span>
                            </div>
                        </div>
                    </div>
                    <p>You answered 2 out of 3 questions correctly.</p>
                    <Button onClick={handleFinish} className="w-full mt-4 flex items-center justify-center"><span className="mr-2">{ICONS.Certificate}</span> Download Certificate</Button>
                </div>
            )}
        </Modal>
    );
};

export default QuizModal;
