import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SocialMedia from './SocialMedia';

interface CustomLinkProps {
    children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ children }) => (
    <a className="block mt-[20px]">
        {children}
    </a>
);

const FooterTop: React.FC = () => {
    const { t } = useTranslation('global');

    return (
        <div className='py-[6.25rem] flex flex-wrap justify-between'>
            <div className='w-full sm:w-auto md:w-4/12'>
                <Link to='/'>
                    <img src="/src/assets/images/footerLogo.png" alt="Footer logo" />
                </Link>
                <div className='flex gap-5 mt-[3.125rem]'>
                    <div className='flex items-center py-[10px] px-[14px] rounded-[16px] gap-[5px] bg-white'>
                        <img src="/src/assets/icons/google_play.svg" alt="Google play" />
                        <p className='text-[12px] leading-[18px]'>
                            {t('footer.google_play')} <br />
                            <span className='text-[16px] leading-[24px] font-medium'>
                                Google Play
                            </span>
                        </p>
                    </div>
                    <div className='flex items-center py-[10px] px-[14px] rounded-[16px] gap-[5px] bg-white'>
                        <img src="/src/assets/icons/app_store.svg" alt="App store" />
                        <p className='text-[12px] leading-[18px]'>
                            {t('footer.app_store')} <br />
                            <span className='text-[16px] leading-[24px] font-medium'>
                                App Store
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full sm:w-auto md:w-4/12'>
                <ul>
                    <li className='text-[#0072BB] font-semibold text-[20px] leading-[30px]'>
                        {t('footer.company_about')}
                    </li>
                    <li>
                        <CustomLink>
                            <Link to='/about'>
                                {t('footer.about')}
                            </Link>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink>
                            <Link to='/contact'>
                                {t('footer.contact')}
                            </Link>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink>
                            <Link to=''>
                                {t('footer.delivery')}
                            </Link>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink>
                            <Link to='/news'>
                                {t('footer.newss')}
                            </Link>
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink>
                            <Link to='/terms'>
                                {t('footer.terms')}
                            </Link>
                        </CustomLink>
                    </li>
                </ul>
            </div>
            <div className='w-full sm:w-auto md:w-4/12'>
                <div className='text-right'>
                    <a href="tel:+998950003003" className='font-medium text-[#0072BB] text-[32px] leading-[48px]'>
                        +99895 000 30 03
                    </a>
                </div>
                <div className='mt-[30px]'>
                    <SocialMedia />
                </div>
                <div className='text-right text-[#677E8B] mt-[30px]'>
                    <a
                        href="mailto:quduqgroup@gmail.com"
                        className='text-[#677E8B] font-medium'
                    >
                        quduqgroup@gmail.com
                    </a>
                    <p className='text-[#677E8B] mt-[30px]'>
                        {t('footer.address.0')}
                        <br />
                        {t('footer.address.1')}
                        {t('footer.address.2')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;
