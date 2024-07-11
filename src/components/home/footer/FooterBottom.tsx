import React from 'react'
import { useTranslation } from 'react-i18next';

const FooterBottom: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className='py-5 sm:p-5 sm:border-none flex sm:flex-col items-center sm:items-start justify-between sm:justify-start text-[14px] leading-[21px] text-[#677E8B] sm:pb-[80px]'>
        <p>
            2024 © quduq.uz
        </p>
        <p className='text-[#0072BB] sm:mt-[10px]'>
            {t('footer.order')}
        </p>
        <p className='sm:mt-[10px]'>
            {t('footer.madeIn')}
        </p>
    </div>
  )
}

export default FooterBottom;