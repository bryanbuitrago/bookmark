const HamburgerButton = ({ isMobileMenuOpen, onClickToggleMobileMenu }) => {
  const topBarAnimation = isMobileMenuOpen ? 'animate-hamburger-top' : '';
  const middleBarVisibility = isMobileMenuOpen ? 'hide-hamburger-middle' : '';
  const bottomBarAnimation = isMobileMenuOpen
    ? 'animate-hamburger-bottom '
    : '';
  return (
    <div className='md:hidden fixed top-14 right-8 z-50'>
      <button
        id='menu-btn'
        className='block focus:outline-none hamburger'
        onClick={onClickToggleMobileMenu}
        type='button'
      >
        <span className={`${topBarAnimation} hamburger-top`}></span>
        <span className={`${middleBarVisibility} hamburger-middle`}></span>
        <span className={`${bottomBarAnimation} hamburger-bottom`}></span>
      </button>
    </div>
  );
};

export default HamburgerButton;
