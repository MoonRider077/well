import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/home/header/Header'
import Footer from '../components/home/footer/Footer'

const ErrorPage: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <>
    <Header />
        <div className='mx-auto max-w-screen-xl pt-[60px] sm:px-5 sm:pt-[1.875rem]'>
            <div className='flex items-center gap-[10px] font-medium '>
                <Link to='/'>
                    <p className='text-[#677E8B] cursor-pointer'>{t('pages.main')}</p>
                </Link>
                <span className='w-1 h-1 rounded-full bg-[#677E8B]'></span>
                <p className='text-[#0072BB]'>
                    404
                </p>
            </div>
            <div className='flex flex-col items-center justify-center pt-[3.75rem] sm:pt-[1.875rem]'>
                <h2 className='font-semibold text-[40px] leading-[60px] sm:text-[24px] sm:leading-[36px]'>
                    <span className='text-[#0072BB]'>
                        {t('error.span')}
                    </span>
                    {t('error.title')}
                </h2>
                <img src="/images/404.png" alt="404" className='mt-[1.25rem] sm:mt-[10px] sm:max-w-xs'/>
                <Link to='/'>
                    <button className='py-4 px-[10rem] sm:py-3 sm:px-[7.125rem] text-nowrap rounded-[50px] bg-[#F7F8FA] mt-[3.125rem] sm:mt-[1.875rem] hover:bg-[#0072BB] hover:text-[#FFFFFF] transition duration-300 ease-in-out'>
                        {t('error.button')}
                    </button>
                </Link>
            </div>
        </div>
    <Footer />
    </>
  )
}

export default ErrorPage