import Image from 'next/image';
import Link from 'next/link';

const FooterSocialMediaIcons = () => {
  return (
    <>
      <Link href='#'>
        <Image
          src='/images/icon-facebook.svg'
          alt='Facebook'
          width={24}
          height={24}
          className='h-6 ficon'
        />
      </Link>
      <Link href='#'>
        <Image
          src='/images/icon-twitter.svg'
          alt='Twitter'
          width={24}
          height={24}
          className='h-6 ficon'
        />
      </Link>
    </>
  );
};

export default FooterSocialMediaIcons;
