import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "FinTech Mobile App",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1750056393326-8feed2a1c34f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbiUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3Njk3NTEzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "large", // spans 2 cols
  },
  {
    id: 2,
    title: "Modern E-Commerce",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1590965918603-0dce981d13b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwJTIwb24lMjBsYXB0b3B8ZW58MXx8fHwxNzY5NzUxMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "small",
  },
  {
    id: 3,
    title: "Minimalist Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1760444748414-fc25608ff568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwZGVzaWduJTIwY2xlYW58ZW58MXx8fHwxNzY5NzUxMzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "small",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Featured Work</h2>
          <p className="text-xl text-gray-600">
            A selection of our recent projects. We take pride in delivering excellence across every pixel and line of code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                project.size === "large" ? "md:col-span-2 aspect-[2/1]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-white/80 text-sm font-medium uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
