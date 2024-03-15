'use client';
import { useState } from 'react';
import FaqAccordionItem from './FaqAccordionItem';
import { FAQ_DATA } from './faqData';

const FaqAccordionSection = () => {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  //  Function to toggle the open state of the accordion
  // If the index is the same as the openItemIndex, set openItemIndex to null, otherwise set it to the index)

  const onClickToggleShow = (index) => {
    const isItemOpen = index === openItemIndex;
    setOpenItemIndex(isItemOpen ? null : index);
  };

  return (
    <section id='faq-accordion'>
      {/* Main Container */}
      <div className='container mx-auto px-6 mb-32'>
        {/* Accordion Container */}
        <div className='max-w-2xl m-8 mx-auto overflow-hidden'>
          {FAQ_DATA.map(({ title, content }, index) => (
            <FaqAccordionItem
              key={index}
              title={title}
              content={content}
              isOpen={openItemIndex === index}
              onClickToggleShow={() => onClickToggleShow(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordionSection;
