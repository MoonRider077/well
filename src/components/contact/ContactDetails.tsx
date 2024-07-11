import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from '../home/footer/SocialMedia'
import { useTranslation } from 'react-i18next'

const ContactDetails: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className='mx-auto max-w-screen-xl mt-[60px] sm:mt-[1.875rem] sm:px-5'>
        <div className='flex items-center gap-[10px] font-medium '>
            <Link to='/'>
                <p className='text-[#677E8B] cursor-pointer'>{t('pages.main')}</p>
            </Link>
            <span className='w-1 h-1 rounded-full bg-[#677E8B]'></span>
            <p className='text-[#0072BB]'>{t('pages.contact')}</p>
        </div>
        <div className='pt-[60px] sm:pt-[1.875rem] flex flex-wrap justify-between sm:block sm:flex-nowrap'>
            <div>
                <h2 className='font-semibold text-[40px] leading-[60px] sm:text-[24px] sm:leading-[36px]'>
                    {t('pages.contact')}
                </h2>
                <div className='bg-[#F7F8FA] p-[3.125rem] sm:p-4 mt-[3.125rem] sm:mt-5 rounded-[20px]'>
                    <p className='font-medium text-[#0072BB]'>
                    {t('pages.phone')}
                    </p>
                    <div className='mt-[6px]'>
                    <a href="tel:+998950003003" className='mt-[6px] font-medium text-[#677E8B] text-[32px] leading-[48px] sm:text-[22px] sm:leading-[30px]'>
                        +99895 000 30 03
                    </a>
                    </div>
                    <div className='w-[300px] h-[1px] bg-[#D0DBF0] mt-[30px] sm:mt-4'></div>
                    <p className='font-medium text-[#0072BB] mt-[30px] sm:mt-4'>
                    {t('pages.socialMedia')}
                    </p>
                    <div className='flex items-start mt-[6px]'>
                        <SocialMedia />
                    </div>
                    <div className='w-[300px] h-[1px] bg-[#D0DBF0] mt-[30px] sm:mt-4'></div>
                    <p className='text-[#0072BB] font-medium mt-[30px] sm:mt-4'>
                    {t('pages.mail')}
                    </p>
                    <div className='mt-[6px]'>
                    <a 
                        href="mailto:quduqgroup@gmail.com"
                        className='text-[#677E8B] font-medium'
                    >
                        quduqgroup@gmail.com
                    </a>
                    </div>
                    <div className='w-[300px] h-[1px] bg-[#D0DBF0] mt-[30px] sm:mt-4'></div>
                    <p className='font-medium text-[#0072BB] mt-[30px] sm:mt-4'>
                    {t('pages.address')}
                    </p>
                    <p className='text-[#677E8B] mt-[6px]'>
                    {t('footer.address.0')}
                    <br />
                    {t('footer.address.1')}
                    {t('footer.address.2')}
                    </p>
                </div>
                </div>
                <div>
                <div>
                    <img src="/images/Mapsicle Map.jpg" alt="Map" className='mt-[110px] sm:hidden'/>
                    <img src="/images/mapMobile.jpg" alt="Map" className='hidden sm:block w-full h-auto mt-[3.125rem]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails