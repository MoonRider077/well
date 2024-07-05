import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Language: React.FC = () => {
    const { i18n } = useTranslation('global');
    const storedLanguage = localStorage.getItem('selectedLanguage') || i18n.language;
    const [selectedLanguage, setSelectedLanguage] = useState(storedLanguage);

    useEffect(() => {
        if (selectedLanguage !== i18n.language) {
            i18n.changeLanguage(selectedLanguage);
            localStorage.setItem('selectedLanguage', selectedLanguage);
        }
        console.log('Selected language:', selectedLanguage);
    }, [selectedLanguage, i18n]);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const lang = event.target.value;
        setSelectedLanguage(lang);
        localStorage.setItem('selectedLanguage', lang);
    };

    return (
        <div className='ml-[2rem] relative sm:hidden'>
            <img 
                src="/icons/GlobeSimple.svg" 
                alt="Globe icon" 
                className='absolute top-3 left-[10px] pointer-events-none'/>
            <select
                className="py-3 pl-[2.5rem] pr-[1.75rem] rounded-[50px] bg-[#F7F8FA] appearance-none cursor-pointer"
                value={selectedLanguage}
                onChange={handleLanguageChange}
            >
                <option value="en">En</option>
                <option value="ru">Рус</option>
                <option value="uz">O'zb</option>
                <option value="de">De</option>
            </select>
            <img 
                src="/icons/arrow-down.svg" 
                alt="Arrow icon" 
                className='absolute top-[18px] right-[10px] pointer-events-none'/>
        </div>
    );
};

export default Language;
