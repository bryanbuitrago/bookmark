import DownloadBoxesSection from '@/components/download/DownloadBoxesSection';
import DownloadHeadingSection from '@/components/download/DownloadHeadingSection';
import FeaturesHeadingSection from '@/components/features/FeaturesHeadingSection';
import FeaturesSection from '@/components/features/FeaturesSection';
import HeroSection from '@/components/hero/HeroSection';
import NavBar from '@/components/navbar/NavBar';
export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <FeaturesHeadingSection />
      <FeaturesSection />
      <DownloadHeadingSection />
      <DownloadBoxesSection />
    </main>
  );
}
