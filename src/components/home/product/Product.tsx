import React from 'react';
import { useTranslation } from 'react-i18next';

interface Card {
  id: number;
  titleKey: string;
  priceKey: string;
  image: string;
}

const cards: Card[] = [
  { id: 1, titleKey: 'products.0.title', priceKey: 'products.0.price', image: '/src/assets/images/filter_1.png' },
  { id: 2, titleKey: 'products.1.title', priceKey: 'products.1.price', image: '/src/assets/images/filter_2.png' },
  { id: 3, titleKey: 'products.2.title', priceKey: 'products.2.price', image: '/src/assets/images/filter_3.png' },
  { id: 4, titleKey: 'products.3.title', priceKey: 'products.3.price', image: '/src/assets/images/filter_4.png' },
  { id: 5, titleKey: 'products.4.title', priceKey: 'products.4.price', image: '/src/assets/images/filter_5.png' },
];

const Product: React.FC = () => {

  const { t } = useTranslation('global')

  return (
    <div className="mx-auto max-w-screen-xl pt-[7.5rem]" id='product'>
        <h2 className='text-[40px] leading-[60px] font-semibold '>
            {t('production.product')}
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 pt-[3.125rem]">
        {cards.map((card, index) => {
          const colSpanClass = index < 2 ? 'md:col-span-6' : 'md:col-span-4';
          
          return (
            <div key={card.id} className={`${colSpanClass} flex items-center text-nowrap p-5 col-span-12 border border-[#F0F2F6]`}>
              <div>
                <div>{t(card.titleKey)}</div>
                <div className='mt-[1.875rem]'>{t(card.priceKey)}</div>
                <button className='bg-[#F7F8FA] mt-[1.875rem] py-[0.8rem] px-[3.5rem] rounded-[50px] hover:text-[#FFFFFF] hover:bg-[#0072BB] transition duration-300 ease-in-out'>
                  {t('buttons.add')}
                </button>
              </div>
              <div className='ml-auto'>
                <img src={card.image} alt="filter images" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
