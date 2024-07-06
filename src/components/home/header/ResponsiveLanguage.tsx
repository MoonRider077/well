import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ResponsiveLanguage: React.FC = () => {
    const { i18n } = useTranslation('global');
    const storedLanguage = localStorage.getItem('selectedLanguage') || i18n.language;
    const [showLanguage, setShowLanguage] = useState<boolean>(false);
    const [selectedLanguage, setSelectedLanguage] = useState<string>(storedLanguage);

    const handleShowLanguage = () => {
        setShowLanguage(!showLanguage);
    };

    const handleLanguageChange = (lang: string) => {
        setSelectedLanguage(lang);
        i18n.changeLanguage(lang);
        localStorage.setItem('selectedLanguage', lang);
        setShowLanguage(false); 
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const menuRes = document.getElementById('res-child');
            const parentDiv = document.getElementById('res-parent');

            if (menuRes && !menuRes.contains(event.target as Node) && parentDiv && !parentDiv.contains(event.target as Node)) {
                setShowLanguage(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div id='res-parent' className='relative hidden sm:block'>
            <div className='bg-[#F7F8FA] rounded-full p-[8px]' onClick={handleShowLanguage}>
                <img src="/icons/GlobeSimple.svg" alt="Globe Icon" />
            </div>
            {showLanguage && (
                <div id='res-child' className='w-[100px] bg-[#a0d2eb] absolute z-50 border border-[#7d3cff] rounded-[10px] right-[-30px] top-12'>
                    <div 
                        className='flex items-center w-full gap-5 cursor-pointer hover:bg-[#83b1c8] rounded-t-[10px]'
                        onClick={() => handleLanguageChange('en')}
                        data-value="en"
                    >
                        <p className='w-[50px] h-[36px] text-[20px] leading-[36px] pl-[10px]'>En</p>
                        <img src="/icons/uk.png" alt="Flag" className='w-[20px] h-[20px]'/>
                    </div>
                    <hr />
                    <div 
                        className='flex items-center w-full gap-5 cursor-pointer hover:bg-[#83b1c8]'
                        onClick={() => handleLanguageChange('ru')}
                        data-value="ru"
                    >
                        <p className='w-[50px] h-[36px] text-[20px] leading-[36px] pl-[10px]'>Рус</p>
                        <img src="/icons/ru.png" alt="Flag" className='w-[20px] h-[20px]'/>
                    </div>
                    <hr />
                    <div 
                        className='flex items-center w-full gap-5 cursor-pointer hover:bg-[#83b1c8]'
                        onClick={() => handleLanguageChange('uz')}
                        data-value="uz"
                    >
                        <p className='w-[50px] h-[36px] text-[20px] leading-[36px] pl-[10px]'>O'zb</p>
                        <img src="/icons/uz.png" alt="Flag" className='w-[20px] h-[20px]'/>   
                    </div>
                    <hr />
                    <div 
                        className='flex items-center w-full gap-5 cursor-pointer hover:bg-[#83b1c8] rounded-b-[10px]'
                        onClick={() => handleLanguageChange('de')}
                        data-value="de"
                    >
                        <p className='w-[50px] h-[36px] text-[20px] leading-[36px] pl-[10px]'>De</p>
                        <img src="/icons/de.svg" alt="Flag" className='w-[20px] h-[20px]'/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ResponsiveLanguage;
