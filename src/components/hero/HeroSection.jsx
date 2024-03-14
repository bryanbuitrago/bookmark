import HeroBackgroundPattern from './HeroBackgroundPattern';
import HeroButtons from './HeroButtons';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const HeroSection = () => {
  return (
    <section id='hero'>
      {/* Container Content & Image */}
      <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0'>
        {/* Hero Content & Buttons Container */}
        <div className='flex flex-col space-y-10 lg:mt-16 lg:w-1/2'>
          <HeroContent />
          {/* Hero Buttons Container */}
          <div className='flex items-center justify-center w-full space-x-4 lg:justify-start'>
            <HeroButtons />
          </div>
        </div>
        {/* Hero Background Pattern & Image Container */}
        <div className='relative mx-auto lg:mb-0 lg:w-1/2'>
          <HeroBackgroundPattern />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
