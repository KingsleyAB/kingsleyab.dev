import BackgroundArcs from '@/components/BackgroundArcs';
import ScrollProgress from '@/components/ScrollProgress';
import SocialSidebar from '@/components/SocialSidebar';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import EngineeringInsights from '@/components/sections/EngineeringInsights';
import Contact from '@/components/sections/Contact';

/**
 * Home page.
 *
 * Layout: full-bleed dark background with fixed decorative arcs in the
 * top-right, fixed vertical social sidebar on the right edge, scroll
 * progress bar at the top, and a centered content column.
 */
export default function HomePage() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <BackgroundArcs />
      <SocialSidebar />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <EngineeringInsights />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
