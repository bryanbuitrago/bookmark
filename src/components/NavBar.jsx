'use client';
import { useState } from 'react';
import DesktopMenuItems from './DesktopMenuItems';
import HamburgerButton from './HamburgerButton';
import MobileMenuItems from './MobileMenuItems';
import MobileLogo from './MobileLogo';
import DesktopLogo from './DesktopLogo';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onClickToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='container relative mx-auto p-6'>
      {/* Flex Container For Nav Items  */}
      <div className='flex items-center justify-between space-x-20 my-6'>
        {/* Desktop/Mobile Logos  */}
        <div className='z-30'>
          {isMobileMenuOpen ? <MobileLogo /> : <DesktopLogo />}
        </div>
        {/* Desktop Nav Items  */}
        <DesktopMenuItems />
        {/* Hamburger Button */}
        <HamburgerButton
          onClickToggleMobileMenu={onClickToggleMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </div>
      {/* Mobile Menu */}
      <MobileMenuItems
        onClickToggleMobileMenu={onClickToggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
    </nav>
  );
};

export default NavBar;
