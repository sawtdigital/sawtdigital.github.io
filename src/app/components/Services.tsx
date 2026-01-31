import { Rocket, Palette, Code, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    icon: Rocket,
    title: 'Strategy',
    description: 'We build roadmaps for success, aligning your business goals with user needs.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Crafting beautiful, intuitive interfaces that engage users and build brand loyalty.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Robust, secure and scalable solutions for web, mobile, and custom applications.',
  },
  {
    icon: BarChart3,
    title: 'Marketing',
    description: 'Data-driven campaigns that drive traffic, conversion, and measurable growth.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Expertise</h2>
            <p className="text-xl text-gray-600">
              We provide a comprehensive suite of digital services to help your business thrive in the modern world.
            </p>
          </div>
          {/* <button className="hidden md:flex items-center gap-2 text-lg font-medium border-b border-black pb-1 hover:text-gray-600 transition-colors">
            See all services <ArrowUpRight className="w-5 h-5" />
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              {/* <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
