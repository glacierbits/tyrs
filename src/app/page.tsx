import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Programme from '@/components/Programme';
import About from '@/components/About';
import Spaces from '@/components/Spaces';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Programme />
        <About />
        <Spaces />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
