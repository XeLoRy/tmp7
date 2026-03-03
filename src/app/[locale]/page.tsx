import { Hero } from '@/components/sections/Hero';
import { FeatureCards } from '@/components/sections/FeatureCards';
import { Stats } from '@/components/sections/Stats';
import { ExpertisesGrid } from '@/components/sections/ExpertisesGrid';
import { Certifications } from '@/components/sections/Certifications';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <Stats />
      <ExpertisesGrid />
      <Certifications />
      <ContactCTA />
    </>
  );
}
