import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Cart from '../product/Cart';

const MenuMobile: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cart);
  const totalQuantity = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { t } = useTranslation('global')

  const toggleCart = () => {
    setIsCartVisible(prev => !prev);
  };

  return (
    <div className='hidden sm:flex items-center justify-between border-0 border-solid border-t-[#EEEEEE] py-2 px-5 w-full bottom-0 fixed bg-white'>
        <div className='flex flex-col items-center'>
            <img src="/icons/House.svg" alt="icon" />
            <p className='text-[13px] leading-[19.5px] text-[#677E8B] hover:text-[#0072BB]'>
                {t('mobile.main')}
            </p>
        </div>
        <div className='flex flex-col items-center'>
            <img src="/icons/UserCircle copy.svg" alt="icon" />
            <p className='text-[13px] leading-[19.5px] text-[#677E8B] hover:text-[#0072BB]'>
                {t('mobile.profile')}
            </p>
        </div>
        <div className='flex flex-col items-center relative'>
            <img src="/icons/ShoppingCartSimple.svg" alt="icon" onClick={toggleCart}/>
            <span className="top-[-5px] right-[3px] text-[12px] leading-[18px] absolute px-[6px] py-[1px] rounded-[50%] bg-[#0072BB] text-white">
                {totalQuantity}
            </span>
            <p className='text-[13px] leading-[19.5px] text-[#677E8B] hover:text-[#0072BB]'>
                {t('mobile.cart')}
            </p>
        </div>
        <div className='flex flex-col items-center'>
            <img src="/icons/List.svg" alt="icon" />
            <p className='text-[13px] leading-[19.5px] text-[#677E8B] hover:text-[#0072BB]'>
                {t('mobile.menu')}
            </p>
        </div>
        {isCartVisible && <Cart isVisible={isCartVisible} onClose={toggleCart} />}
    </div>
  );
}

export default MenuMobile;
