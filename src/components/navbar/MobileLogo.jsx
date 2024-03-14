import Image from 'next/image';
const MobileLogo = () => {
  return (
    <Image
      src='/images/logo-bookmark-footer.svg'
      id='logo'
      alt='logo'
      width={120}
      height={120}
      className='mt-3'
    />
  );
};

export default MobileLogo;
