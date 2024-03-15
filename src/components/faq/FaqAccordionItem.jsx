import ArrowSVGfaq from './ArrowSVGfaq';

const FaqAccordionItem = ({ title, content, isOpen, onClickToggleShow }) => {
  const highlightIfOpen = isOpen ? 'text-red-500' : 'group-hover:text-red-500';
  const animateAndColorIfOpen = isOpen ? '-rotate-180 text-red-500' : '';
  const showIfOpen = isOpen ? 'group-focus:max-h-screen' : 'max-h-0';
  return (
    <div
      className='py-1 border-b outline-none group'
      onClick={onClickToggleShow}
    >
      {/* Tab Flex Container   */}
      <div
        className='flex items-center justify-between py-3 text-gray-500 
                   transition duration-500 cursor-pointer group ease'
      >
        {/*  Tab Title  */}
        <div className={`transition duration-500 ease ${highlightIfOpen}`}>
          {title}
        </div>

        {/*  Tab Arrow  */}
        <div
          className={`transition duration-500 ease ${animateAndColorIfOpen}`}
        >
          <ArrowSVGfaq />
        </div>
      </div>
      {/*  Tab Inner Content  */}

      <div className={`overflow-hidden transition duration-500 ${showIfOpen}`}>
        <p className='py-2 text-justify text-gray-400'>{content}</p>
      </div>
    </div>
  );
};

export default FaqAccordionItem;
