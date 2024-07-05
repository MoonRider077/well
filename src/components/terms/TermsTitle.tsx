import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const TermsTitle: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className='mx-auto max-w-screen-xl pt-[60px]'>
        <div className='flex items-center gap-[10px] font-medium '>
            <Link to='/'>
                <p className='text-[#677E8B] cursor-pointer'>{t('pages.main')}</p>
            </Link>
            <span className='w-1 h-1 rounded-full bg-[#677E8B]'></span>
            <p className='text-[#0072BB]'>{t('pages.termsTitle')}</p>
        </div>
        <div className='pt-[3.75rem] flex justify-center'>
            <div className='text-left w-[65%]'>
                <h2 className='font-semibold text-[40px] leading-[60px]'>
                    {t('pages.termsTitle')}
                </h2>
                <h3 className='font-medium text-[20px] leading-[30px] text-[#0072BB] mt-[50px]'>
                    {t('pages.termsSubtitle1')}
                </h3>
                <p className='mt-[10px] font-light text-[#677E8B]'>
                    {t('terms.1')} <br />
                    {t('terms.1.1')} <br />
                    {t('terms.1.2')} <br />
                    {t('terms.1.3')} <br />
                    {t('terms.1.4')} <br />
                    {t('terms.1.5')} <br />
                    {t('terms.1.6')} <br />
                    {t('terms.1.7')} <br />
                    {t('terms.1.8')} <br />
                    {t('terms.1.9')} <br />
                    {t('terms.1.10')} <br />
                    {t('terms.1.11')} <br />
                </p>
                <h3 className='font-medium text-[20px] leading-[30px] text-[#0072BB] mt-[50px]'>
                    {t('pages.termsSubtitle2')}
                </h3>
                <p className='mt-[10px] font-light text-[#677E8B]'>
                    {t('terms.2.1')} <br />
                    {t('terms.2.2')} <br />
                    {t('terms.2.3')} <br />
                    {t('terms.2.4')} <br />
                    {t('terms.2.5')} <br />
                    {t('terms.2.6')} <br />
                    {t('terms.2.7')} <br />
                    {t('terms.2.8')} <br />
                </p>
                <h3 className='font-medium text-[20px] leading-[30px] text-[#0072BB] mt-[50px]'>
                    {t('pages.termsSubtitle3')}
                </h3>
                <p className='mt-[10px] font-light text-[#677E8B]'>
                    {t('terms.3.1')} <br />
                    {t('terms.3.2')} <br />
                    {t('terms.3.3')} <br />
                    {t('terms.3.4')} <br />
                    {t('terms.3.5')} <br />
                </p>
            </div>
        </div>
    </div>
  )
}

export default TermsTitle