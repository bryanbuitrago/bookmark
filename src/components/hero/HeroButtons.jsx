import Link from 'next/link';

const HeroButtons = () => {
  return (
    <>
      <Link
        className='p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2
                         border-softBlue md:text-base hover:bg-white hover:text-softBlue'
        href='#'
      >
        Get it on Chrome
      </Link>
      <Link
        className='p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 
                       border-gray-300 md:text-base hover:bg-white hover:text-gray-600'
        href='#'
      >
        Get it on Firefox
      </Link>
    </>
  );
};

export default HeroButtons;
