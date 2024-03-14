import Link from 'next/link';

const MobileMenu = ({ isMobileMenuOpen, onClickToggleMobileMenu }) => {
  const showOrHideMenu = isMobileMenuOpen ? 'flex' : 'hidden';

  return (
    // ===<< Mobile Menu Container >>===
    <div
      id='menu'
      className={`${showOrHideMenu} flex-col fixed inset-0 z-20 items-center self-end w-full h-full
                 min-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white
                 uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
    >
      <div
        className='w-full py-3 text-center'
        onClick={onClickToggleMobileMenu}
      >
        <Link href='#features'>Features</Link>
      </div>
      <div
        className='w-full py-3 text-center'
        onClick={onClickToggleMobileMenu}
      >
        <Link href='#download'>Download</Link>
      </div>
      <div
        className='w-full py-3 text-center'
        onClick={onClickToggleMobileMenu}
      >
        <Link href='#faq'>FAQ</Link>
      </div>
      <div
        className='w-full py-3 text-center'
        onClick={onClickToggleMobileMenu}
      >
        <Link href='#login'>Login</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
