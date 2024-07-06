import React from "react";

interface AccordionProps {
    index: number;
    isOpen: boolean;
    onClick: (index: number) => void;
    title: string;
    answer: string;
    addMarginTop: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ index, isOpen, onClick, title, answer, addMarginTop }) => {

    const isSmallScreen = window.innerWidth <= 576;

    return (
        <div className={`p-5 bg-[#F7F8FA] sm:p-4 border border-none rounded-[16px] ${addMarginTop ? 'mt-[10px]' : ''} ${isSmallScreen && index === 0 ? 'mt-[20px]' : ''}`}>
            <button 
                onClick={() => onClick(index)}
                className="flex justify-between w-full items-center sm:items-start">
                <span className={`${isOpen ? 'text-[#0072BB]' : 'text-[#000000]'} sm:text-left sm:w-[75%]`}>
                    {title}
                </span>
                <span className="p-4 sm:p-[11px] rounded-full bg-white">
                    <img
                        src={isOpen ? '/icons/Minus.svg' : '/icons/Plus.svg'}
                        alt={isOpen ? 'Minus Icon' : 'Plus Icon'}
                    />
                </span>
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden sm:mt-3">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default Accordion