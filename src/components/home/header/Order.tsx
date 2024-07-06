import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Order: React.FC = () => {

    const { t } = useTranslation('global')
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const menuContainer = document.getElementById('order-menu');
            const parentDiv = document.getElementById('order-parent');

        if (menuContainer && !menuContainer.contains(event.target as Node) && parentDiv && !parentDiv.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

  return (
        <div className='relative'>
            <div id="order-parent" className='flex bg-[#F7F8FA] p-3 sm:p-[8px] rounded-[50px] cursor-pointer' onClick={toggleMenu}>
                <img src="/icons/MapPin.svg" alt="Map pin" />
                <p className='ml-1 sm:hidden'>{t('header.delivery')}</p>
                <img 
                    src={!showMenu ? "/icons/arrow-down.svg" : "/icons/arroww-up.svg"}
                    alt={!showMenu ? "Open menu" : "Close menu"}
                    className='ml-[60px] sm:hidden'
                />
            </div>
            {showMenu && (
                <div id="order-menu" className='sm:hidden py-3 shadow-md px-[10px] w-full cursor-pointer flex justify-between bg-white absolute top-[55px] rounded-[16px] z-[999]'>
                    <p className='text-[#0072BB] text-nowrap'>
                        {t('header.order')}
                    </p>
                    <img src="/icons/Plus.svg" alt="Plus icon" />
                </div>
            )}
        </div>
  )
}

export default Order