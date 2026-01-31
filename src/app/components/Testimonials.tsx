import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Nexus was a transformative experience. They didn't just redesign our website; they redefined our brand.",
    author: "Sarah Johnson",
    role: "CMO, TechFlow",
    image: "https://randomuser.me/api/portraits/women/44.jpg" // Using randomuser as placeholder avatar, safe and reliable.
  },
  {
    quote: "The level of creativity and technical expertise is unmatched. They delivered a complex product ahead of schedule.",
    author: "Michael Chen",
    role: "Founder, StartUp Inc",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Their strategic approach to marketing helped us triple our leads in just three months. Highly recommended.",
    author: "Emily Davis",
    role: "Director, GreenGrowth",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <Quote className="w-12 h-12 text-gray-500 mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-center">Client Success Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{item.author}</h4>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed italic">"{item.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
