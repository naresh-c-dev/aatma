import React, { FC } from 'react';
import { useApp } from '../../context/AppContext';
import { DUMMY_USER } from '../../constants/data';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

const AuthModal: FC<{ isLogin: boolean, onSwitch: () => void, onClose: () => void }> = ({ isLogin, onSwitch, onClose }) => {
    const { setUser } = useApp();
    const handleSubmit = () => {
        setUser(DUMMY_USER);
        onClose();
    };
    return (
        <Modal title={isLogin ? "Login" : "Sign Up"} onClose={onClose}>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <Input type="email" placeholder="Email Address" required />
                <Input type="password" placeholder="Password" required />
                {!isLogin && <Input type="password" placeholder="Confirm Password" required />}
                <Button type="submit" className="w-full">{isLogin ? "Login" : "Create Account"}</Button>
                <button type="button" className="w-full p-2 border border-neutral-300 rounded-md mt-2">Sign in with Google</button>
                <p className="text-center text-sm">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button type="button" onClick={onSwitch} className="font-semibold text-saffron ml-1">
                        {isLogin ? "Sign Up" : "Login"}
                    </button>
                </p>
            </form>
        </Modal>
    );
};

export default AuthModal;
