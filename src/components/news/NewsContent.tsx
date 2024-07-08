import React from 'react'
import { Link } from 'react-router-dom'
import NewsCarousel from '../home/news/NewsCarousel'
import { useTranslation } from 'react-i18next'

const NewsContent: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className='mx-auto max-w-screen-xl pt-[3.75rem] px-5 sm:pt-[1.875rem]'>
        <div className='flex items-center gap-[10px] font-medium'>
            <Link to='/'>
                <p className='text-[#677E8B] cursor-pointer'>{t('pages.main')}</p>
            </Link>
            <span className='w-1 h-1 rounded-full bg-[#677E8B]'></span>
            <p className='text-[#0072BB]'>{t('pages.news')}</p>
        </div>
        <h2 className='font-semibold text-[40px] leading-[60px] mt-[3.75rem] sm:mt-[1.875rem] sm:text-[24px] sm:leading-[36px]'>
          {t('pages.news')}
        </h2>
        <NewsCarousel />
    </div>
  )
}

export default NewsContent