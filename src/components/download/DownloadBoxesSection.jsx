import DownloadBox from './DownloadBox';
import { BOXES_DATA } from './data';

const DownloadBoxesSection = () => {
  return (
    <section id='download' className='py-32'>
      {/* <<==== Boxes Container ====>> */}
      <div className='container flex flex-col items-center max-w-5xl mx-auto space-y-10 px-20 md:flex-row md:px-6 md:space-y-0 md:space-x-7'>
        {BOXES_DATA.map(
          (
            { browserTitle, minimumVersion, imgSrc, alt, addMarginTop },
            index
          ) => (
            <DownloadBox
              key={index}
              browserTitle={browserTitle}
              minimumVersion={minimumVersion}
              imgSrc={imgSrc}
              alt={alt}
              addMarginTop={addMarginTop}
            />
          )
        )}
      </div>
    </section>
  );
};

export default DownloadBoxesSection;
