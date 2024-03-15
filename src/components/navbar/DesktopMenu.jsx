import Link from 'next/link';
const DesktopMenu = () => {
  return (
    <div className='hidden items-center space-x-10 uppercase text-grayishBlue md:flex'>
      <Link className='tracking-widest hover:text-softRed' href='#features'>
        Features
      </Link>
      <Link className='tracking-widest hover:text-softRed' href='#download'>
        Download
      </Link>
      <Link className='tracking-widest hover:text-softRed' href='#faq'>
        FAQ
      </Link>
      <Link
        className='px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg
                     shadow-md hover:text-softRed hover:bg-white'
        href='#login'
      >
        Login
      </Link>
    </div>
  );
};

export default DesktopMenu;
