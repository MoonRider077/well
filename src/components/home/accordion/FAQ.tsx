import React, { useState } from 'react';
import Accordion from './Accordion';
import { useTranslation } from 'react-i18next';

type AccordionItem = {
  title: string;
  answer: string;
};

const FAQ: React.FC = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);
  const { t } = useTranslation('global');

  const handleAccordionClick = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const accordionItems = t('accordion.items', { returnObjects: true }) as AccordionItem[]

  return (
    <div className="pt-[7.5rem] sm:pt-[3.125rem] sm:px-5 mx-auto max-w-screen-xl flex sm:block space-x-32 sm:space-x-0">
      <div className="w-1/4 sm:w-full">
        <h2 className="font-semibold text-[40px] leading-[60px] sm:text-[24px] sm:leading-[36px] text-nowrap">
          {t('accordion.title')}
        </h2>
      </div>
      <div className="w-3/4 sm:w-full">
        {accordionItems.map((item, index) => (
          <Accordion
            key={index}
            index={index}
            isOpen={openAccordionIndex === index}
            onClick={handleAccordionClick}
            title={item.title} 
            answer={item.answer}
            addMarginTop={index !== 0} 
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
