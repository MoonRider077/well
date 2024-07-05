import React from 'react'
import NewsCarousel from './NewsCarousel'
import { useTranslation } from 'react-i18next'

const News: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className='mx-auto max-w-screen-xl pt-[7.5rem]'>
        <div>
            <h2 className='font-semibold text-[40px] leading-[60px]'>
                {t('news.title')}
            </h2>
        </div>
        <div>
            <NewsCarousel />
        </div>
    </div>
  )
}

export default News