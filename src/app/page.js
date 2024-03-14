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
    </main>
  );
}
