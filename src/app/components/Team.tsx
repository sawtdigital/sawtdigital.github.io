import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Team() {
  return (
    <section id="our-team" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY3JlYXRpdmUlMjB0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyJTIwaW4lMjBvZmZpY2V8ZW58MXx8fHwxNzY5NzUxMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Creative Team"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 rounded-full -z-10"></div>
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-100 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <span className="text-sawt-secondary font-display font-bold tracking-wider uppercase mb-2 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Industry veterans with a passion for digital excellence.
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Sawt's mission is simple; to help businesses to be heard in the digital world. We believe that great ideas
              come from diverse perspectives, and our team is made up of talented individuals from all walks of life.
            </p>
            {/* <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team is composed of award-winning designers, developers, and strategists from around the globe. We
              work remotely but collaborate closely, bringing diverse perspectives to every project.
            </p> */}

            {/* <div className="flex gap-8 mb-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-500">Projects Launched</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">12</h3>
                <p className="text-gray-500">Awards Won</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-500">Client Satisfaction</p>
              </div>
            </div> */}

            <a
              href="mailto:hello@sawt.com.au"
              className="text-black font-medium text-lg flex items-center gap-2 group hover:gap-4 transition-all"
            >
              Meet the team <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
