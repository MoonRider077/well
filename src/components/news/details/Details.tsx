import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

interface DetailsProps  {
    picture: string;
}

const Details: React.FC<DetailsProps> = ({ picture }) => {

  const { t } = useTranslation('global')

  return (
    <div className='mx-auto max-w-screen-xl pt-[3.75rem]'>
        <div className='flex items-center gap-[10px] font-medium'>
            <Link to='/'>
                <p className='text-[#677E8B] cursor-pointer'>{t('pages.main')}</p>
            </Link>
            <span className='w-1 h-1 rounded-full bg-[#677E8B]'></span>
            <Link to='/news'>
                <p className='text-[#677E8B] cursor-pointer'>{t('pages.news')}</p>
            </Link>
            <span className='w-1 h-1 rounded-full bg-[#677E8B]'></span>
            <p className='font-medium text-[#0072BB]'>{t('pages.details')}</p>
        </div>
        <div className='pt-[3.75rem] flex justify-center'>
                <div className='text-left w-[65%]'>
                    <h2 className='font-semibold text-[40px] leading-[60px]'>
                        {t('pages.newsDetails')}
                    </h2>
                        <img src={picture} 
                            alt="Banner"  
                            className='mt-[3.125rem]'/>
                    <p className='font-medium text-[#677E8B] mt-[3.125rem]'>
                        {t('pages.more1')}
                    <br />
                    <br />
                        {t('pages.more2')}
                    </p>
                </div>
            </div>
    </div>
  )
}

export default Details