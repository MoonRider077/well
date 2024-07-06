import React from 'react'
import NewsCarousel from './NewsCarousel'
import NewsMobileCarousel from './NewsMobileCarousel'
import { useTranslation } from 'react-i18next'

const News: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className='mx-auto max-w-screen-xl sm:px-5 pt-[7.5rem] sm:pt-[3.125rem]'>
        <div>
            <h2 className='font-semibold text-[40px] leading-[60px] sm:text-[24px] sm:leading-[36px]'>
                {t('news.title')}
            </h2>
        </div>
        <div className='sm:hidden'>
            <NewsCarousel />
        </div>
        <div className='hidden sm:block'>
            <NewsMobileCarousel />
        </div>
    </div>
  )
}

export default News