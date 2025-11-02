import React, { FC, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ICONS } from '../../constants/icons';
import Button from '../Button';
import Input from '../Input';
import Modal from '../Modal';

const ChatInterface: FC<{onClose: () => void}> = ({ onClose }) => {
    const { modalContext: practitioner } = useApp();
    const [messages, setMessages] = useState([
        { from: 'practitioner', text: 'Namaste! How may I assist you today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { from: 'user', text: input }]);
        setInput('');
        // Simulate a response
        setTimeout(() => {
            setMessages(prev => [...prev, { from: 'practitioner', text: 'Interesting question. Let me consult the charts...' }]);
        }, 1500);
    };

    return (
        <Modal title={`Chat with ${practitioner.name}`} onClose={onClose}>
            <div className="h-80 flex flex-col">
                <div className="flex-grow overflow-y-auto space-y-2 p-2 bg-cream rounded-md">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-2 rounded-lg max-w-xs ${msg.from === 'user' ? 'bg-blue-100' : 'bg-neutral-200'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex gap-2">
                    <Input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Type your message..."
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <Button onClick={handleSend} className="px-4">Send</Button>
                </div>
            </div>
        </Modal>
    );
};

export default ChatInterface;
