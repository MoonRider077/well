import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Description: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className='mx-auto max-w-screen-xl pt-[60px] sm:pt-[1.875rem] sm:px-5'>
        <div className='flex items-center gap-[10px] font-medium '>
            <Link to='/'>
                <p className='text-[#677E8B] cursor-pointer'>{t('pages.main')}</p>
            </Link>
            <span className='w-1 h-1 rounded-full bg-[#677E8B]'></span>
                <p className='text-[#0072BB]'>{t('pages.about')}</p>
        </div>
        <div className='pt-[3.75rem] sm:pt-[1.875rem] flex justify-center'>
            <div className='text-left w-[65%] sm:w-full'>
                <h2 className='font-semibold text-[40px] leading-[60px] sm:text-[24px] sm:leading-[36px]'>{t('pages.about')}</h2>
                <img src="/images/AboutUsBanner.jpg" alt="About Us Banner" className='mt-[50px] sm:mt-5'/>
                <p className='text-[#677E8B] font-medium mt-[50px] sm:mt-5'>
                    {t('pages.aboutUs1')}
                <br />
                <br />
                    {t('pages.aboutUs2')}   
                </p>
            </div>
        </div>
    </div>
  )
}

export default Description