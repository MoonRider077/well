import React from 'react';

interface OverlayProps {
    onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onClick }) => {
    return (
        <div className='z-[999] fixed inset-0 bg-black opacity-50' onClick={onClick}></div>
    );
};

export default Overlay;