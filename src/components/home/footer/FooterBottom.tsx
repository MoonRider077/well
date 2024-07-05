import React from 'react'
import { useTranslation } from 'react-i18next';

const FooterBottom: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className='py-5 border-t border-[#EAEDF2] flex items-center justify-between text-[14px] leading-[21px] text-[#677E8B]'>
        <p>
            2024 © quduq.uz
        </p>
        <p className='text-[#0072BB]'>
            {t('footer.order')}
        </p>
        <p>
            {t('footer.madeIn')}
        </p>
    </div>
  )
}

export default FooterBottom;