import Button from "../button/Button"
import { useTranslation } from "react-i18next"
import './Carousel.css'

export default function Banner() {

  const { t } = useTranslation('global');

  return (
      <>
        <div className="relative sm:hidden">
          <img src="/images/banner.jpg" alt="Banner" />
          <p className="absolute text-5xl leading-[72px] font-semibold top-[6rem] left-[7.5rem]">
            {t('banner.main')} <br />
            <span className="text-[#0072BB]">
              {t('banner.second')} <br />
              {t('banner.third')}
            </span>
          </p>
          <Button />
          <img src="/images/bannerImage.png" alt="Filter photo" className="absolute right-0 bottom-0"/>
        </div>
        <div className="relative hidden sm:block px-5">
          <img src="/images/mobile_banner.jpg" alt="Mobile Banner" className="w-[100%] h-auto mob-img relative"/>
          <p className="absolute text-[20px] leading-[30px] xs:text-[24px] xs:leading-[36px] font-semibold top-6 left-12">
            {t('banner.main')} <br />
            <span className="text-[#0072BB]">
              {t('banner.second')} <br />
              {t('banner.third')}
            </span>
          </p>
            <button className="absolute bg-white text-[#0072BB] border border-[#0072BB] transition duration-300 ease-in-out hover:bg-[#0072BB] hover:text-white py-2 px-8 rounded-[50px] top-[7.8rem] xs:top-[9rem] left-10">
              {t('buttons.details')}
            </button>
          <img src="/images/MobileFilter.png" alt="Filter photo" className="absolute right-[20px] bottom-0 xs:w-[500px]"/>
        </div>
      </>
  )
}
