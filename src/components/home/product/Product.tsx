import React from 'react';
import { useTranslation } from 'react-i18next';

interface Card {
  id: number;
  titleKey: string;
  priceKey: string;
  image: string;
}

const cards: Card[] = [
  { id: 1, titleKey: 'products.0.title', priceKey: 'products.0.price', image: '/images/filter_1.png' },
  { id: 2, titleKey: 'products.1.title', priceKey: 'products.1.price', image: '/images/filter_2.png' },
  { id: 3, titleKey: 'products.2.title', priceKey: 'products.2.price', image: '/images/filter_3.png' },
  { id: 4, titleKey: 'products.3.title', priceKey: 'products.3.price', image: '/images/filter_4.png' },
  { id: 5, titleKey: 'products.4.title', priceKey: 'products.4.price', image: '/images/filter_5.png' },
];

const Product: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className="mx-auto max-w-screen-xl pt-[7.5rem] sm:pt-[4.7rem] sm:px-5" id='product'>
        <h2 className='text-[40px] leading-[60px] sm:text-[24px] sm:leading-[36px] font-semibold '>
            {t('production.product')}
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 pt-[3.125rem] sm:pt-5">
        {cards.map((card, index) => {
          const colSpanClass = index < 2 ? 'md:col-span-6' : 'md:col-span-4';
          const borderRadiusClass = 
            index === 0 ? 'sm:rounded-t-[30px] border-b-0' :
            index === cards.length - 1 ? 'sm:rounded-b-[30px]' :
            index === 1 || index === 2 || index === 3 ? 'sm:border-b-0' :
            '';

          const borderClass = 
          index === 0 ? 'md:rounded-tl-[30px] md:border-r-0 md:border-b-0' :
          index === 1 ? 'md:rounded-tr-[30px] md:border-b-0' :
          index === 2 ? 'md:rounded-bl-[30px] md:border-r-0' :
          index === 3 ? 'md:border-r-0' :
          index === 4 ? 'md:rounded-br-[30px]' : '';
          
          return (
            <div key={card.id} className={`${colSpanClass} ${borderRadiusClass} ${borderClass} sm:flex-col-reverse flex items-center sm:items-start text-nowrap p-5 col-span-12 border border-solid border-[#F0F2F6]`}>
              <div>
                  <p className='sm:mt-8 sm:text-left'>
                    {t(card.titleKey)}
                  </p>
                  <p className='mt-[1.875rem] sm:mt-4'>
                    {t(card.priceKey)}
                  </p>
                <button className='border-none bg-[#F7F8FA] sm:mt-4 mt-[1.875rem] py-[0.8rem] px-[3.5rem] rounded-[50px] hover:text-[#FFFFFF] hover:bg-[#0072BB] transition duration-300 ease-in-out'>
                  {t('buttons.add')}
                </button>
              </div>
              <div className='ml-auto sm:ml-0 sm:w-full sm:flex sm:justify-center'>
                <img src={card.image} alt="filter images" className='w-auto max-w-full sm:max-w-full h-auto'/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
