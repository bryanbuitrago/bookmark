const HamburgerButton = ({ isMobileMenuOpen, onClickToggleMobileMenu }) => {
  const topBarAnimation = isMobileMenuOpen
    ? 'bookmark-animate-hamburger-top'
    : '';
  const middleBarVisibility = isMobileMenuOpen
    ? 'bookmark-hide-hamburger-middle'
    : '';
  const bottomBarAnimation = isMobileMenuOpen
    ? 'bookmark-animate-hamburger-bottom'
    : '';
  return (
    <div className='md:hidden fixed top-14 right-8 z-50'>
      <button
        id='menu-btn'
        className='block focus:outline-none bookmark-hamburger'
        onClick={onClickToggleMobileMenu}
        type='button'
      >
        <span className={`${topBarAnimation} bookmark-hamburger-top`}></span>
        <span
          className={`${middleBarVisibility} bookmark-hamburger-middle`}
        ></span>
        <span
          className={`${bottomBarAnimation} bookmark-hamburger-bottom`}
        ></span>
      </button>
    </div>
  );
};

export default HamburgerButton;
