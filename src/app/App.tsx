import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Services } from '@/app/components/Services';
import { Work } from '@/app/components/Work';
import { Testimonials } from '@/app/components/Testimonials';
import { Team } from '@/app/components/Team';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-sawt-primary selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      {/* <Work /> */}
      <Team />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
