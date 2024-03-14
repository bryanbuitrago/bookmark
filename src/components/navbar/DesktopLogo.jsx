import Image from 'next/image';

const DesktopLogo = () => {
  return (
    <Image
      src='/images/logo-bookmark.svg'
      id='logo'
      alt='logo'
      width={200}
      height={200}
    />
  );
};

export default DesktopLogo;
