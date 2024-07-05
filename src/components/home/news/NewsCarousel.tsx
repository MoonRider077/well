import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface newsData {
    id: number,
    image: string,
    titleKey: string,
    subtitleKey: string,
    link: string
}

const newsDatas: newsData[] = [
    { id: 1, 
    image: '/src/assets/images/newsPicture1.jpg', 
    titleKey: 'news.description.0.title', 
    subtitleKey: 'news.description.0.subtitle',
    link: '/news/details/1' 
    },

    { id: 2, 
    image: '/src/assets/images/newsPicture2.jpg', 
    titleKey: 'news.description.1.title', 
    subtitleKey: 'news.description.1.subtitle',
    link: '/news/details/2' 
    },
    
    { id: 3, 
    image: '/src/assets/images/newsPicture3.jpg', 
    titleKey: 'news.description.2.title', 
    subtitleKey: 'news.description.2.subtitle',
    link: '/news/details/3' 
    }
]

const NewsCarousel: React.FC = () => {

  const { t } = useTranslation('global') 

  return (
    <div className='grid grid-cols-1 md:grid-cols-12 mt-[3.125rem] gap-5'>
        {newsDatas.map((card, index) => {
            const colSpanClass = index < 3 ? 'md:col-span-4' : 'md:col-span-12';

            return (
                <div key={card.id} className={`${colSpanClass} p-5 border border-[#F0F2F6]`}>
                    <img src={card.image} alt="image" />
                    <p className='mt-5 font-semibold'>{t(card.titleKey)}</p>
                    <p className='mt-[10px] font-medium text-[#677E8B]'>{t(card.subtitleKey)}</p>
                    <Link to={card.link}>
                    <button className='hover:bg-[#0072BB] hover:text-[#FFFFFF] transition duration-300 ease-in-out py-3 px-16 rounded-[50px] bg-[#F0F2F6] text-[#000000] mt-5'>
                        {t('buttons.details')}
                    </button>
                    </Link>
                </div>
            )
        })}
    </div>
  )
}

export default NewsCarousel