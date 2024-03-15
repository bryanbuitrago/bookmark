import DownloadBoxesSection from '@/components/download/DownloadBoxesSection';
import DownloadHeadingSection from '@/components/download/DownloadHeadingSection';
import FaqAccordionSection from '@/components/faq/FaqAccordionSection';
import FaqHeadingSection from '@/components/faq/FaqHeadingSection';
import FeaturesHeadingSection from '@/components/features/FeaturesHeadingSection';
import FeaturesSection from '@/components/features/FeaturesSection';
import HeroSection from '@/components/hero/HeroSection';
import NavBar from '@/components/navbar/NavBar';
import NewsletterSection from '@/components/newsletter/NewsletterSection';
export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <FeaturesHeadingSection />
      <FeaturesSection />
      <DownloadHeadingSection />
      <DownloadBoxesSection />
      <FaqHeadingSection />
      <FaqAccordionSection />
      <NewsletterSection />
    </main>
  );
}
