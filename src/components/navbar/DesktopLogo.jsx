import Image from 'next/image';

const DesktopLogo = () => {
  return (
    <Image
      src='/bookmark-web-app/images/logo-bookmark.svg'
      id='logo'
      alt='logo'
      width={200}
      height={200}
    />
  );
};

export default DesktopLogo;
