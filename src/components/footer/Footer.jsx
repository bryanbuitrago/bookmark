import FooterLogoAndMenu from './FooterLogoAndMenu';
import FooterSocialMediaIcons from './FooterSocialMediaIcons';

const Footer = () => {
  return (
    <footer className='py-16 bg-veryDarkBlue'>
      {/* Logo/Menu & SocialMedia Container */}
      <div
        className='container flex flex-col items-center justify-between 
                      mx-auto space-y-16 px-6 md:flex-row md:space-y-0'
      >
        {/* Logo & Menu Container */}
        <div
          className='flex flex-col items-center justify-between space-y-8 text-lg 
                     font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue'
        >
          <FooterLogoAndMenu />
        </div>
        {/* Social Media Icons Container */}
        <div className='flex space-x-10'>
          <FooterSocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
