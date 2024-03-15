import Image from 'next/image';
const HeroImage = () => {
  return (
    <Image
      src='/images/illustration-hero.svg'
      alt='hero'
      width={500}
      height={500}
      className='relative z-10 lg:top-24 xl:top-0 overflow-x-visible'
    />
  );
};

export default HeroImage;
