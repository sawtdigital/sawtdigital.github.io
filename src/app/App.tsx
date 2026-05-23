import Nav from '@/app/blocks/Nav';
import Hero from '@/app/blocks/Hero';
import About from '@/app/blocks/About';
import Capabilities from '@/app/blocks/Capabilities';
import Industries from '@/app/blocks/Industries';
import Contact from '@/app/blocks/Contact';
import Footer from '@/app/blocks/Footer';

export default function App() {
  return (
    <div className="w-full text-black font-sans selection:bg-black selection:text-canvas">
      <Nav />
      <Hero />
      <About />
      <Capabilities />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}
