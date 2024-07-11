import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const OrderPage: React.FC = () => {

  const { t } = useTranslation('global')
  
  return (
    <div className='hidden sm:block relative'>
        <nav className='flex py-4 px-5 justify-between border-0 border-b border-solid border-[#F0F2F6]'>
            <h2 className='font-semibold text-[20px] leading-[30px]'>
                {t('header.delivery')}
            </h2>
            <Link to='/'>
                <div className='p-2 bg-[#F7F8FA] rounded-full'>
                    <img src="/icons/X.svg" alt="close icon"/>
                </div>
           </Link>
        </nav>
            <div className='mt-[168px] px-5'>
                <div className='flex flex-col items-center'>
                    <img src="/icons/orderMobile.svg" alt="icon" />
                    <h3 className='text-[#677E8B] font-semibold text-[20px] leading-[30px] mt-5'>
                        {t('mobile.noAddress')}
                    </h3>
                    <p className='font-medium text-[#677E8B] mt-[6px] text-center'>
                        {t('mobile.addressInfo')}
                    </p>
                </div>
            </div>
        <footer className='fixed bottom-0 w-full bg-[#F7F8FA] p-5 flex justify-center'>
            <button className='rounded-[50px] border-none bg-[#0072BB] py-3 px-[6rem] text-white font-medium text-nowrap hover:bg-white hover:text-[#0072BB]'>
                {t('header.order')}
            </button>
        </footer>
    </div>
  )
}

export default OrderPage