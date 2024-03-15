import Image from 'next/image';
import Link from 'next/link';
import { PANELS_DATA } from './featuresData';

const FeaturesPanels = ({ activePanel }) => {
  //  Show or hide panel based on activePanel
  const showCurrentPanel = (panelID) =>
    panelID === activePanel ? '' : 'hidden';
  return (
    <div id='panels' className='container mx-auto'>
      {PANELS_DATA.map(({ panelID, imgSrc, title, description }) => (
        <Panel
          key={panelID}
          panelID={panelID}
          imgSrc={imgSrc}
          title={title}
          description={description}
          showCurrentPanel={showCurrentPanel(panelID)}
        />
      ))}
    </div>
  );
};

const Panel = ({ panelID, imgSrc, title, description, showCurrentPanel }) => {
  return (
    <div
      id={panelID}
      className={`${showCurrentPanel} flex flex-col py-5 md:flex-row md:space-x-7 panel`}
    >
      {/* === Panel Image === */}
      <div className='flex justify-center md:w-1/2'>
        <Image
          src={imgSrc}
          alt={title}
          width={500}
          height={500}
          className='relative z-10'
        />
      </div>
      {/* === Panel Content === */}
      <div className='flex flex-col space-y-8 md:w-1/2'>
        <h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
          {title}
        </h3>
        <p className='max-w-md text-center text-grayishBlue md:text-left'>
          {description}
        </p>
        <div className='mx-auto md:mx-0'>
          <Link
            href='#'
            className='px-6 py-3 mt-4 font-semibold text-white bg-softBlue border-2
                     border-white rounded-lg md:inline-flex hover:bg-white 
                     hover:text-softBlue hover:border-softBlue hover:border-2'
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPanels;
