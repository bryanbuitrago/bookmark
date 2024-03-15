import Image from 'next/image';
import Link from 'next/link';

const FooterLogoAndMenu = () => {
  return (
    <>
      <Image
        src='/bookmark-web-app/images/logo-bookmark-footer.svg'
        alt='Bookmark Logo'
        width={200}
        height={200}
        className='mb-1'
      />

      <Link className='uppercase hover:text-softRed' href='#features'>
        Features
      </Link>
      <Link className='uppercase hover:text-softRed' href='#download'>
        Download
      </Link>
      <Link className='uppercase hover:text-softRed' href='#faq'>
        FAQ
      </Link>
    </>
  );
};

export default FooterLogoAndMenu;
