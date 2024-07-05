import { Link } from "react-router-dom"
import Language from "./Language";
import { useTranslation } from "react-i18next";
import Order from "./Order";
import Hamburger from "./Hamburger";
import ResponsiveLanguage from "./ResponsiveLanguage";

export default function Header() {
    const { t } = useTranslation('global');

    
return (
    <header className="border-b border-[#F0F2F6]">
        <div className='mx-auto max-w-screen-xl py-[10px] sm:px-5 flex justify-between sm:bg-[red]'>
        <div className='flex items-center'>
            <Link to='/'>
                <img src="./src/assets/images/header__logo.png" alt="Header logo" className="sm:w-[130px] sm:h-[32px]"/>
            </Link>
        </div>
        <div className='flex items-center gap-5 sm:gap-[10px]'>
        <div className="hidden sm:block p-[11px] rounded-full bg-[#F7F8FA]">
            <a href="tel:+998950003003">
                <img src="/src/assets/icons/Phone.svg" alt="Phone" />
            </a>
        </div>
            <ResponsiveLanguage />
            <Hamburger />
            <Order />
        </div>
        <div className="flex sm:hidden">
            <ul className="flex gap-6 items-center">
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
                <a href="tel:+998950003003" className="sm:hidden m-0 ml-9 text-2xl text-[#0072BB]">+99895 000 30 03</a>
            </div>
            <div className="flex items-center gap-7 ml-9 sm:hidden">
                <img src="/src/assets/icons/ShoppingCartSimple.svg" alt="Cart icon" />
                <img src="/src/assets/icons/UserCircle.svg" alt="User circle" />
            </div>
        </div>
    </div>
    </header>
  )
}
