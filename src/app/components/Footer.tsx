import { Facebook, Twitter, Instagram, Linkedin, Heart, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-row flex-wrap justify-between gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/assets/sawt-white.svg" alt="Sawt Digital" className="h-8" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are a digital agency that builds products, brands, and experiences for the modern world.
            </p>
            {/* <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Links */}
          {/* <div>
             <h4 className="text-lg font-bold mb-6">Company</h4> 
            <ul className="flex flex-row flex-wrap justify-center gap-4">
              {['About', 'Services', 'Work', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Branding', 'Digital Marketing'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-bold mb-6">Get in touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@sawt.com.au" className="group flex items-center justify-start">
                  <Mail className="w-4.5 h-4.5 inline-block mr-2" />{' '}
                  <span className="group-hover:underline">hello@sawt.com.au</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sawt Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
