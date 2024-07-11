import { useState } from "react";
import { Link } from "react-router-dom";
import Language from "./Language";
import { useTranslation } from "react-i18next";
import Order from "./Order";
import Hamburger from "./Hamburger";
import ResponsiveLanguage from "./ResponsiveLanguage";
import { useSelector } from "react-redux";
import Cart from "../product/Cart";
import Overlay from "../product/Overlay";
import { RootState } from "@reduxjs/toolkit/query";

export default function Header() {
    const { t } = useTranslation('global');
    const cartItems = useSelector((state: RootState) => state.cart.cart);
    const [isCartVisible, setIsCartVisible] = useState(false)
    

    const toggleCart = () => {
        setIsCartVisible(!isCartVisible)
    }
    
    const totalQuantity = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);

    return (
        <header className="border-0 border-b border-solid border-[#F0F2F6]">
            <div className='mx-auto max-w-screen-xl py-[10px] sm:px-5 flex justify-between'>
                <div className='flex items-center'>
                    <Link to='/'>
                        <img src="/images/header__logo.png" alt="Header logo" className="sm:w-[130px] sm:h-[32px]" />
                    </Link>
                </div>
                <div className='flex items-center gap-5 sm:gap-[10px]'>
                    <div className="hidden sm:block p-[11px] rounded-full bg-[#F7F8FA]">
                        <a href="tel:+998950003003">
                            <img src="/icons/Phone.svg" alt="Phone" />
                        </a>
                    </div>
                    <ResponsiveLanguage />
                    <Hamburger />
                    <Order />
                </div>
                <div className="flex sm:hidden">
                    <ul className="flex gap-[26px] items-center">
                        <li>
                            <Link to="/about">{t('header.about')}</Link>
                        </li>
                        <li>
                            <Link to="/contact">{t('header.contact')}</Link>
                        </li>
                        <li>
                            <Link to="/news">{t('header.news')}</Link>
                        </li>
                    </ul>
                    <Language />
                    <div className="flex items-center">
                        <a href="tel:+998950003003" className="sm:hidden lg:hidden tablet:hidden m-0 ml-9 text-2xl text-[#0072BB]">
                            +99895 000 30 03
                        </a>
                    </div>
                    <div className="flex items-center gap-7 ml-9 sm:hidden relative">
                        <img src="/icons/ShoppingCartSimple.svg" alt="Cart icon" className="cursor-pointer" onClick={toggleCart}/>
                        <span className="top-[5px] right-[45px] text-[12px] leading-[18px] absolute px-[6px] py-[1px] rounded-[50%] bg-[#0072BB] text-white">
                            {totalQuantity}
                        </span>
                        <img src="/icons/UserCircle.svg" alt="User circle" />
                    </div>
                </div>
            </div>
            {isCartVisible && <Overlay onClick={toggleCart} />}
            <Cart isVisible={isCartVisible} onClose={toggleCart}/>
        </header>
    );
}
