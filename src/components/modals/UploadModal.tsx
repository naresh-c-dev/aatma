import React, { FC } from 'react';
import { useApp } from '../../context/AppContext';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

const UploadModal: FC<{onClose: () => void}> = ({onClose}) => {
    const { showToast } = useApp();
    const handleUpload = () => {
        onClose();
        showToast("Video is processing and will be live after review.");
    }
    return (
        <Modal title="Upload Video" onClose={onClose}>
            <Input type="file" accept="video/*" />
            <textarea placeholder="Write a caption..." className="w-full p-2 border mt-2 h-24 border-neutral-300 rounded-md bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent"></textarea>
            <Button onClick={handleUpload} className="w-full mt-2">Upload</Button>
        </Modal>
    );
};

export default UploadModal;
