import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function Button() {

  const { t } = useTranslation('global')

  return (
    <>
    <Link
        to="product"
        spy={true}
        smooth={true}
        duration={500}
      >
        <button className="absolute bg-white text-[#0072BB] border border-[#0072BB] transition duration-300 ease-in-out hover:bg-[#0072BB] hover:text-white py-4 px-16 rounded-[50px] bottom-[6rem] left-[7.5rem]">
            {t('buttons.details')}
        </button>
      </Link>
    </>
  )
}
