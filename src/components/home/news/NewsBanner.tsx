import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NewsBanner: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className='p-5 border border-[#F0F2F6]'>
      <img src="/images/mobileNews.jpg" alt="image" className='w-full h-auto'/>
      <p className='mt-5 font-semibold'>{t('news.description.0.title')}</p>
      <p className='mt-[10px] font-medium text-[#677E8B]'>{t('news.description.0.subtitle')}</p>
      <Link to='/news/details/1'>
        <button className='hover:bg-[#0072BB] hover:text-[#FFFFFF] transition duration-300 ease-in-out py-3 px-16 border-none rounded-[50px] bg-[#F0F2F6] text-[#000000] mt-5'>
            {t('buttons.details')}
        </button>
      </Link>
    </div>
  )
}

export default NewsBanner