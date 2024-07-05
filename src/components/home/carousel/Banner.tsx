import Button from "../button/Button"
import { useTranslation } from "react-i18next"

export default function Banner() {

  const { t } = useTranslation('global');

  return (
    <div className="relative">
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
  )
}
