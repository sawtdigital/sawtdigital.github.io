import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '@/app/components/SectionLabel';

const capabilities = [
  {
    n: '01',
    title: 'Rapid prototyping',
    ar: 'نموذج',
    body: "From brief to working product, faster than you'd expect. AI-assisted tooling, proven process, no corners cut.",
  },
  {
    n: '02',
    title: 'Pixel perfect development',
    ar: 'دقة',
    body: 'Your Figma file becomes your website, exactly.',
  },
  {
    n: '03',
    title: 'Compliance architecture',
    ar: 'امتثال',
    body: 'ASIC. TGA. Privacy Act. We know the frameworks. Compliance baked in from day one, not retrofitted at the end.',
  },
  {
    n: '04',
    title: 'AI integration',
    ar: 'ذكاء',
    body: "Experimental by nature. We build with AI where it adds real value, not because it's on trend.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-black text-canvas px-6 md:px-10 py-20 md:py-32 border-b-2 border-black">
      <SectionLabel num="003" label="Capabilities" ar="قدراتنا" variant="dark" />

      <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-canvas">
        {capabilities.map((c, i) => (
          <div
            key={c.n}
            className={`p-8 md:p-12 group hover:bg-signal hover:text-black transition-colors border-b-2 border-canvas ${i < 2 ? 'border-b-2 border-canvas' : ''} ${i % 2 === 0 ? 'md:border-r-2 md:border-canvas' : ''}`}
          >
            <div className="flex items-start justify-between mb-12">
              <span className="font-mono text-xs tracking-caps">/{c.n}</span>
              {/* <span className="font-arabic text-2xl" dir="rtl">
                {c.ar}
              </span> */}
            </div>
            <h3 className="text-[30px] sm:text-[36px] lg:text-[44px] leading-title tracking-title font-black uppercase mb-6">
              {c.title}
            </h3>
            <p className="text-[15px] md:text-base leading-normal max-w-md opacity-80 group-hover:opacity-100">
              {c.body}
            </p>
            <a
              href="#contact"
              className="mt-10 flex items-center gap-2 font-mono text-label tracking-caps uppercase opacity-0 group-hover:opacity-100 transition-opacity group"
            >
              Engage <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
